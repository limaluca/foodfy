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