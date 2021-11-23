const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: String,
    imageURL: String,
    prepTime: String,
    ingredients: String,
    story: String,
    directions: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);