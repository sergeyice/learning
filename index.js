// библиотеки

let express = require('express');

// конфигурационные файлы

let config = require('./config.json');

// приложение

let app = express();

// обработка запросов

app.get('/', (req, res) => {

	res.send('Hello Sergey!');

});

app.get('/secret', (req, res) => {

	res.send('^_^');

});

// запуск прослушивания порта для HTTP сервера

app.listen(config.port, () => {

	console.log('http://localhost:' + config.port);

});