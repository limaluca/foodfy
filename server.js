const { response } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server.set('view engine', '.njk');

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server
})



server.listen(5000, function() {
    console.log("Foody is ALIVE, bitch")
})

server.get("/", function(request, response) {
    return response.send("Busy boy!")
})

server.get("/index", function(request, response) {
    return response.render("index")
})


server.get("/about", function(request, response) {
    return response.render("about")
})


server.get("/recepies", function(request, response) {
    return response.render("recepies")
})