const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('GET /api/finishedRecipes');
  pool
    .query(`
    SELECT * from "finalized_recipes";
    `).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error in GET /api/finishedRecipes', error)
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;