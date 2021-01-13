const express = require('express')
const routes = express.Router()
const data = require('./data');




routes.get("/", function(request, response) {
    return response.render("index", { items: data })
})

routes.get("/index", function(request, response) {

    return response.render("index", { items: data })

})

routes.get("/about", function(request, response) {
    return response.render("about")
})

routes.get("/recipes", function(request, response) {


    return response.render("recipes", { items: data })
})

routes.get("/recipe", function(request, response) {

    const id = request.query.id

    const foundRecipe = data.find(function(recipe) {
        return id == recipe.id;
    })

    if (!foundRecipe) {
        return response.send("Ops! Parece que esta receita não foi cadastrada.")
    }


    const recipe = {
        ...foundRecipe,
        ingredients: String(foundRecipe.ingredients).split(","),
        preparation: String(foundRecipe.preparation).split(".,")
    }

    return response.render("recipe", { item: recipe })
})

module.exports = routes;