const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query(`
    SELECT * from "finalized_recipes";
    `).then((result) => {
    res.send(result.rows);
    console.log('GET /api/finishedRecipes', result.rows);
  }).catch((error) => {
    console.log('Error in GET /api/finishedRecipes', error)
    res.sendStatus(500);
  });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const idOfRecipeToGet = req.params.id;
  console.log('in /FinishedRecipe/2', idOfRecipeToGet)
  const sqlText = `
  SELECT * FROM "unfinished_recipes"
      WHERE "recipe_id"=$1;
  `
  const sqlValues = [idOfRecipeToGet];
  pool.query(sqlText, sqlValues)
      .then((dbRes) => {
          res.send(dbRes.rows[0])
      })
      .catch((dbErr) => {
          console.log('Error in Edit Recipe GET', dbErr);
          res.sendStatus(500);
      })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('finished POST', req.body)
  const newFinishedRecipe = req.body;
  console.log('************', newFinishedRecipe)
  const sqlText = `
  INSERT INTO "finalized_recipes" 
  ("finalized_author", "finalized_recipe_name", "finalized_ingredients", "finalized_directions", "finalized_notes", "finalized_user_id")
  VALUES ($1, $2, $3, $4, $5, $6);
  `;
  const sqlValues = [
    newFinishedRecipe.finalized_author,
    newFinishedRecipe.finalized_recipe_name,
    newFinishedRecipe.finalized_ingredients,
    newFinishedRecipe.finalized_directions,
    newFinishedRecipe.finalized_notes,
    newFinishedRecipe.user_id
  ];
  pool.query(sqlText, sqlValues)
    .then((result) => {
      console.log('Fishished Recipe post sqlValues', sqlValues);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error)
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  console.log('************', req.params.id)
  const idToDelete = req.params.id;
  const sqlQuery = `
    DELETE FROM "finalized_recipes"
      WHERE "recipe_id" = $1;
  `;
  const sqlValue = [idToDelete];
  pool.query(sqlQuery, sqlValue)
  .then((response) => {
    res.sendStatus(202)
  })
  .catch((error) => {
    console.log('error in finalized DELETE', error);
    res.sendStatus(500);
  })
});

module.exports = router;