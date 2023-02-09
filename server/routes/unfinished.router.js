const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET /api/home');
  pool.query('SELECT * from "unfinished_recipes";').then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.log('Error in GET /api/home', error)
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