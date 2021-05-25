let http = require('http');

let port = 80;

let server = http.createServer((req, res) => {

    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end(req.url === '/' ? 'Hello World!' : 'WAT?');

});

server.listen(port, () => {
  console.log('Сервер работает по адресу: http://localhost:' + port);
});