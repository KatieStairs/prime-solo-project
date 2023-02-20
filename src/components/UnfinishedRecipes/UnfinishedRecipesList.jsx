import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UnfinishedRecipesItem from './UnfinishedRecipesItem';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function UnfinishedRecipesList() {
    const dispatch = useDispatch();
    // const store = useReduxStore();
    const unfinishedRecipesList = useSelector(store => store.unfinishedRecipesList);

    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_UNFINISHED'
        })
    }, []);



    return (
        <div>
            <h1>Unfinished Recipes:</h1>
            
            {unfinishedRecipesList.map((unfinished) => {
                    return <UnfinishedRecipesItem key={unfinished.recipe_id} unfinished={unfinished} />
                })}
        </div>
    )
}

export default UnfinishedRecipesList;