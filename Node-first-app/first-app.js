const http = require("http"); // require() is nodeJS's way of importing modules
const routes = require("./routes");

const server = http.createServer(routes); // .createServer returns a server, so you have to store the output in a variable

server.listen(3000);