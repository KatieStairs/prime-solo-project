const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const idOfRecipeToGet = req.params.id;
    console.log('in /FullRecipeView/22', idOfRecipeToGet)
    const sqlText = `
    SELECT * FROM "finalized_recipes"
        WHERE "recipe_id"=$1;
    `
    const sqlValues = [idOfRecipeToGet];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows[0])
        })
        .catch((dbErr) => {
            console.log('Error in Full View Recipe GET', dbErr);
            res.sendStatus(500);
        })
});

module.exports = router;