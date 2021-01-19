const fs = require('fs');
const data = require('./data.json');

exports.index = function(request, response) {

    return response.render("index", { items: data.recipes })
}

exports.about = function(request, response) {
    return response.render("about")
}

exports.create = function(request, response) {
    return response.render("recipes/create")
}

exports.post = function(request, response) {
    // arrays com as chaves do body

    const keys = Object.keys(request.body)
        // Validando as chaves

    for (key of keys) {
        if (request.body[key] == "") {
            return response.send("Por favor, preencha todos os campos")
        }
    }



    let {
        image_url,
        title,
        author,
        ingredients,
        preparations,
        information
    } = request.body


    const id = Number(data.recipes.length + 1);


    data.recipes.push({
        id,
        image_url,
        title,
        author,
        ingredients,
        preparations,
        information
    })



    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return response.send("Write file error!")

        return response.redirect("/index")
    })



}

exports.show = function(request, response) {
    const { id } = request.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    });


    if (!foundRecipe) return response.send("recipe not found.");



    const recipe = {
        //spread operator (everything else on the recipe)
        ...foundRecipe,
        ingredients: String(foundRecipe.ingredients).split(","),
        preparation: String(foundRecipe.preparation).split(".,")
    }

    return response.render("recipes/show", { recipe })
}

exports.edit = function(request, response) {
    const { id } = request.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    });


    if (!foundRecipe) return response.send("recipe not found.");

    const recipe = {
        ...foundRecipe,

    }

    return response.render("recipes/edit", { recipe })
}

exports.put = function(request, response) {
    const { id } = request.body //ter que buscar na propria pagina (pelo hidden id)

    let index = 0;

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    });


    if (!foundRecipe) return response.send("recipe not found.");


    const recipe = {
        ...foundRecipe,
        ...request.body //trazer todos os dados novos colocados no body(formulario)
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return response.send("Write file error!")

        return response.redirect(`/recipes/${id}`)
    })


}

exports.delete = function(request, response) {
    const { id } = request.body

    const filteredRecipes = data.recipes.filter(function(recipe) {
        return recipe.id != id
    })


    data.recipes = filteredRecipes;


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return response.send("write file error")

        return response.redirect("/index")
    })
}