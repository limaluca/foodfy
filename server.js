// const { response } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const routes = require('./routes')


server.set('view engine', '.njk');

server.use(express.static('public'));
server.use(routes)

nunjucks.configure("views", {
    express: server
})

server.listen(5000, function() {
    console.log("Foody is ALIVE, bitch")
})

//   disciplines: foundTeacher.disciplines.split(","),