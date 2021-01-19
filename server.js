// const { response } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override')
const server = express();

const routes = require('./routes')


server.set('view engine', '.njk');



server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'))
server.use(routes)

nunjucks.configure("views", {
    express: server
})

server.listen(5000, function() {
    console.log("Foody is ALIVE, bitch")
})

//   disciplines: foundTeacher.disciplines.split(","),