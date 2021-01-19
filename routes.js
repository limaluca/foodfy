const express = require('express')
const routes = express.Router()
const recipes = require("./recipes")



routes.get("/", recipes.index)

routes.get("/index", recipes.index)

routes.get("/about", recipes.about)

routes.get("/recipes/create", recipes.create)


routes.post("/recipes", recipes.post)

routes.get("/recipes/:id", recipes.show)

routes.get("/recipes/:id/edit", recipes.edit)

routes.put("/recipes", recipes.put)

routes.delete("/recipes", recipes.delete)

// routes.get("/recipes", function(request, response) {


//     return response.render("recipes", { items: data.recipes })
// })

// routes.get("/recipe", function(request, response) {

//     const id = request.query.id

//     const foundRecipe = data.recipes.find(function(recipe) {
//         return id == recipe.id;
//     })

//     if (!foundRecipe) {
//         return response.send("Ops! Parece que esta receita não foi cadastrada.")
//     }




//     const recipe = {
//         ...foundRecipe,
//         ingredients: String(foundRecipe.ingredients).split(","),
//         preparation: String(foundRecipe.preparation).split(".,")
//     }

//     return response.render("teachers/show", { teacher })

//     return response.render("recipe", { item: recipe })
// })


module.exports = routes;