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

router.delete('/:id', (req, res) => {
  console.log('************', req.params.id)
  const idToDelete = req.params.id;
  const sqlQuery = `
    DELETE FROM "finalizedRecipes"
      WHERE "id" = $1;
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