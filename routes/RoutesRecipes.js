// import dependencies
const express = require('express');
// const { update } = require('../models/ModelsRecipes');
const router = express.Router();

// import model
const Recipe = require('../models/ModelsRecipes');

// get command to retrieve all recipes 
router.get('/', async (req, res)=>{
    try {
        // find recipies and save them to variable 'recipes'
        const recipes = await Recipe.find();
        // respond with a json array of all recipe objects
        res.json(recipes);
    } catch(err) {
        console.log(err);
    }
})

// create a new recipe
router.post('/', async (req, res)=>{
    try {
        // create new recipe from the request body and save it to variable 'newRecipe'
        const newRecipe = new Recipe(req.body);
        // use the .save() command to save the new recipe to the database
        const savedRecipe = await newRecipe.save();
        // respond with a json object of the new recipe
        res.json(savedRecipe);
    } catch(err) {
        console.log(err);
    }
})

// Get a specific recipe
router.get('/:id', async (req, res)=>{
    try {
        // find existing recipe in database by the specific ID that is sent in the URL and placed in req.params
        const specificRecipe = await Recipe.findById({_id: req.params.id});
        // respond with a json object of the specific recipe
        res.json(specificRecipe);
    } catch(err) {
        console.log(err);
    }
})

// update an existing recipe based on the id that is passed into params via the URL
router.put('/:id', async (req, res)=>{
    try {
        // call updateOne() with two objects. {_id: req.params.id} gets the id from req.params. {$set: req.body} takes the updates from the req.body and updates the recipe.
        const updatedRecipe = await Recipe.updateOne({_id: req.params.id}, {$set: req.body});
        // respond with a json object of the updated recipe
        res.json(updatedRecipe)
    } catch(err) {
        console.log(err);
    }
})

// delete a recipe based on the id passed into params via the URL
router.delete('/:id', async (req, res)=>{
    try {
        // use the findByIdAndDelete() to find the recipe and delete it from the database. The input to the function is an object that specifies the id taken from params.
        const deletedRecipe = await Recipe.findByIdAndDelete({_id: req.params.id});
        // respond with a json object of the recipe that was removed.
        res.json({
            deleted: true,
            deletedRecipe: deletedRecipe
        })
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;
