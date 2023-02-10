const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET /api/UnfinishedRecipes');
    pool
      .query(`
      SELECT * from "unfinished_recipes";
      `).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error in GET /api/UnfinishedRecipes', error)
      res.sendStatus(500);
    });
  });

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const idOfRecipeToGet = req.params.id;
    const sqlText = `
    SELECT * FROM "unfinished_recipes"
        WHERE "id"=$1;
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

/**
 * POST route template
 */
router.post('/Ingredients', rejectUnauthenticated, (req, res) => {
  console.log(req.body)
  const recipeIngredients = req.body.recipeIngredients;
  console.log('************', req.body.recipeIngredients)
  const sqlText = `
  INSERT INTO "unfinished_recipes" ("recipe_name", "recipe_ingredients")
  VALUES ($1, $2);
  `
  pool.query(sqlText, [recipeIngredients])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error)
      res.sendStatus(500);
    });
});

module.exports = router;