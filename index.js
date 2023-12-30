const http = require("http");
const app = require("./app");
const patching = require('./patching')


const startServer = async () => {
  const server = http.createServer(app);
  const port = 6969;

  await patching.patchCORSServer();
  await patching.patchAsar(port);

  app.set('view engine', 'ejs');

  // server listening 
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();