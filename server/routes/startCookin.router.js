const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
  const newRecipe = req.body;
  const sqlQuery = `
    INSERT INTO "unfinished_recipes"
    ("recipe_author", "recipe_name", "recipe_ingredients", "recipe_directions", "recipe_notes")
    VALUES
    ($1, $2, $3, $4, $5)
  `;
  const sqlValues = [
    newRecipe.recipeAuthor,
    newRecipe.recipeName,
    newRecipe.recipeIngredients,
    newRecipe.recipeDirections,
    newRecipe.recipeNotes
  ];
  pool.query(sqlQuery, sqlValues)
  .then(() => { res.sendStatus(201); })
  .catch((error) => {
    console.log('Error in startCookin POST', error);
    res.sendStatus(500);
  });
});

module.exports = router;