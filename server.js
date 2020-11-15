const { response } = require('express');
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
    return response.render("recepies")
})

// server.get("/recipe", function(request, response) {
//     const id = request.query.id;
//     console.log(id);

//     const recipe = foodfyRecipies.find(function(recipe) {
//         return recipe.id == id

//     })
//     if (!recipe) {
//         return response.send("recipe not found!")
//     }

//     return response.send("hmyes")


// })

server.get("/recepies/:index", function(request, response) {
    const recipes = foodfyRecipies // Array de receitas carregadas do data.js
    const recipeIndex = request.params.index;

    if (recipeIndex === undefined) {
        console.log("n exite")
    }

    console.log(recipes[recipeIndex]);

})