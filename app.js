const express = require("express");
const axios = require('axios');
const path = require("path");
const http = require('http');
const util = require('util');
const dns = require('dns');
const fs = require('fs');
const app = express();

const readFileAsync = util.promisify(fs.readFile);
const renameAsync = util.promisify(fs.rename);

app.use(express.text());
app.use(express.static('views'));


app.get("/", (req, res) => {
    res.render('pages/index');
});

app.get("/intercept|settings|view|mock", (req, res) => {
    res.render('pages/index');
});

app.get("/app.js", async (req, res) => {
    try {
        const hasInternetConnection = await checkInternetConnection();

        console.log(hasInternetConnection);

        if (!hasInternetConnection) {
            console.log('No internet connection, using old app.js file');
            return res.sendFile(path.join(__dirname, 'AppFiles/app_b.js'));
        }

        console.log('Has internet connection');

        const headResponse = await axios.head('http://app.httptoolkit.tech/app.js');
        const lastModified = Date.parse(headResponse.headers["last-modified"]);

        const newApp = path.join(__dirname, 'AppFiles/app_new.js');
        const editedApp = path.join(__dirname, 'AppFiles/app_b.js');
        const oldEditedApp = path.join(__dirname, 'AppFiles/app_b_old.js');
        let thresholdDate
        if(fs.existsSync(editedApp)){
            thresholdDate = Date.parse(fs.statSync(editedApp).mtime)
        }
        

        if (lastModified < thresholdDate) {
            console.log('Using old app.js file');
            return res.sendFile(editedApp);
        }

        console.log('app.js file has been updated, trying to save it and patch it');

        const response = await axios.get('http://app.httptoolkit.tech/app.js', { responseType: 'stream' });
        const file = fs.createWriteStream(newApp);
        response.data.pipe(file);

        await new Promise((resolve, reject) => {
            file.on('finish', resolve);
            file.on('error', reject);
        });

        console.log('Downloaded app.js successfully');

        await downloadDependencies();
        if(fs.existsSync(editedApp))
        {
            await renameAsync(editedApp, oldEditedApp);
            console.log('app_b.js was renamed to app_b_old.js successfully');
        }

        const data = await readFileAsync(newApp, 'utf8');
        const result = data.replace(/isPaidUser\(\)\{var e;return"past_due"!==.+?this\.isStatusUnexpired/g, 'isPaidUser(){return true;');

        if (!result.includes("return true")) {
            console.error('Patching Failed! using original file');
            return res.sendFile(editedApp);
        }

        await fs.promises.writeFile(editedApp, result, 'utf8');
        console.log('Patched Successfully! using updated file');
        return res.sendFile(editedApp);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

async function downloadDependencies()
{
    const depsPath = path.join(__dirname, 'views');
    fs.readdir(depsPath, (err, files) => {
        files.forEach(async file => {
            const filePath = path.join(depsPath, file);
            if (fs.statSync(filePath).isDirectory()) {
                return;
            }
            const headResponse = await axios.head(`http://app.httptoolkit.tech/${file}`);
            const lastModified = Date.parse(headResponse.headers["last-modified"]);

            const thresholdDate = Date.parse(fs.statSync(filePath).mtime)

            if (lastModified < thresholdDate) {
               return;
            }

            const response = await axios.get(`http://app.httptoolkit.tech/${file}`, { responseType: 'stream' });
            const newFile = fs.createWriteStream(filePath);
            response.data.pipe(newFile);

            console.log(`Downloaded a new version of ${file}`)

        });
      });
}

async function checkInternetConnection() {
    try {
        await axios.head('http://www.google.com');
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = app;