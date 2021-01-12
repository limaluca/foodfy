// const { response } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

const foodfyRecipies = require('./data');

server.set('view engine', '.njk');

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server
})



server.listen(5000, function() {
    console.log("Foody is ALIVE, bitch")
})

server.get("/", function(request, response) {
    return response.render("index", { items: foodfyRecipies })
})

server.get("/index", function(request, response) {

    return response.render("index", { items: foodfyRecipies })


})


server.get("/about", function(request, response) {
    return response.render("about")
})


server.get("/recepies", function(request, response) {

    return response.render("recepies", { items: foodfyRecipies })
})

server.get("/recipe", function(request, response) {
    const id = request.query.id

    const recipe = foodfyRecipies.find(function(recipe) {
        return recipe.id == id;
    })

    if (!recipe) {
        return response.send("Recipe not found!")

        //VER COMO PEGA LISTA DE STRINGS (INGREDIENTS) pra expor no recipe 

    }


    return response.render("recipe", { item: recipe })

})