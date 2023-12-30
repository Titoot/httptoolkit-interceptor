const path = require("path");
const fs = require('fs').promises;
const asar = require('@electron/asar');

async function patchCORSServer() {
  try {
    const folderPath = path.join(process.env.LOCALAPPDATA, 'httptoolkit-server', 'client');
    const serverVersion = await fs.readdir(folderPath);
    const indexPath = path.join(folderPath, serverVersion[0], 'bundle', 'index.js');

    const data = await fs.readFile(indexPath, 'utf8');

    if (data.includes("e.ALLOWED_ORIGINS=false") && !data.includes("e.ALLOWED_ORIGINS=e.IS_PROD_BUILD")) {
      console.log('Server is already patched');
      return;
    }

    console.log('Server is not patched, patching in process...');

    const patchedData = data.replace(/e\.ALLOWED_ORIGINS=e\.IS_PROD_BUILD/g, 'e.ALLOWED_ORIGINS=false');

    if (!patchedData.includes("e.ALLOWED_ORIGINS=false")) {
      console.error('Server patching failed!');
      return;
    }

    await fs.writeFile(indexPath, patchedData, 'utf8');

    console.log('Server patched successfully');
  } catch (error) {
    console.error('Error while patching server:', error.message);
  }
}

async function patchAsar(port) {
  try {
    const resourcesPath = path.join(process.env.LOCALAPPDATA, 'Programs', 'httptoolkit', 'resources');
    const asarPath = path.join(resourcesPath, 'app.asar');

    const data = await fs.readFile(asarPath, 'utf-8');

    if (data.includes(`|| 'http://localhost:${port}';`)) {
      console.log('Asar Already Patched');
      return;
    }

    console.log('Asar is not patched, patching in process...');

    const appPath = path.join(resourcesPath, 'app');
    asar.extractAll(asarPath, appPath);

    const indexPath = path.join(appPath, 'build', 'index.js');
    let indexData = await fs.readFile(indexPath, 'utf-8');

    const oldURL = `|| 'https://app.httptoolkit.tech';`;
    const newURL = `|| 'http://localhost:${port}';`;

    indexData = indexData.replace(oldURL, newURL);

    if (!indexData.includes(newURL)) {
      console.error('Asar Patching Failed!');
      return;
    }

    await fs.writeFile(indexPath, indexData, 'utf-8');

    asar.createPackage(appPath, asarPath);

    console.log('Asar patched Successfully');
  } catch (error) {
    console.error('Error while patching Asar:', error.message);
  }
}

module.exports = {
    patchCORSServer,
    patchAsar
}