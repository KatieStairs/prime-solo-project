const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('GET /api/UnfinishedRecipes', 'should not be run for edit recipes');
  pool.query(`
    SELECT * from "unfinished_recipes";
    `).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error in GET /api/UnfinishedRecipes', error)
    res.sendStatus(500);
  });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('REQ.PARAMS.ID for DELETE', req.params.id);
  const sqlQuery = 'DELETE FROM "unfinished_recipes" where recipe_id=$1'
  pool.query(sqlQuery, [req.params.id])
    .then((response) => { 
      res.sendStatus(200); 
    }).catch((error) => {
      console.log('Error in Unfinished Delete', error)
      res.sendStatus(500);
    });
});

module.exports = router;