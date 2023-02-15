const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/'), rejectUnauthenticated, (req, res) => {
    console.log('GET /api/StartCookin', );
    pool
      .query(`
      SELECT * from "unfinished_recipes";
      `).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error in GET /api/StartCookin', error)
      res.sendStatus(500);
    });
}

router.post('/', rejectUnauthenticated, (req, res) => {
  const newRecipe = req.body;
  console.log('post req.body', newRecipe);
  const sqlQuery = `
    INSERT INTO "unfinished_recipes"
    ("recipe_author", "recipe_name", "recipe_ingredients", "recipe_directions", "recipe_notes")
    VALUES
    ($1, $2, $3, $4, $5)
  `;
  const sqlValues = [
    newRecipe.author,
    newRecipe.name,
    newRecipe.ingredients,
    newRecipe.directions,
    newRecipe.notes
  ];
  pool.query(sqlQuery, sqlValues)
  .then(() => { 
    console.log('in post', sqlValues)
    res.sendStatus(201); })
  .catch((error) => {
    console.log('Error in startCookin POST', error);
    res.sendStatus(500);
  });
});

module.exports = router;