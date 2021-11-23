const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log('Connected to MongoDB');
});

const RecipesRoute = require('./routes/RoutesRecipes');
app.use('/recipes', RecipesRoute);

const port = 5000;
app.listen(port, console.log(`Listening on Port ${port}`));