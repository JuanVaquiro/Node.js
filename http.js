const http = require("http");

const server = http.createServer((reques, response) => {
  console.log(reques.url);
  if (reques.url === "/") {
    response.write("welcome, welcome");
    return response.end();
  }
  if (reques.url === "/about") {
    response.write("nueva ruta acerca de");
    return response.end();
  }
  response.write("Not Found");
  response.end();
});

server.listen(3000);

console.log("sevidor corriendo");
