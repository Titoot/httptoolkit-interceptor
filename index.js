const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const port = 6969;


app.set('view engine', 'ejs');

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});