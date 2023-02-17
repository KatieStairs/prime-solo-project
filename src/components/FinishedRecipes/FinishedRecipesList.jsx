import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FinishedRecipesItem from './FinishedRecipesItem'

function FinishedRecipesList () {
    const dispatch = useDispatch();
    const finishedRecipesList = useSelector(store => store.finishedRecipesList);

    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_FINISHED'
        })
    }, []);



    return (
        <div>
            <h3>Finished Recipes List:</h3>
            {finishedRecipesList.map((finished) => {
                    return <FinishedRecipesItem key={finished.recipe_id} finished={finished} 
                    />
                })}
        </div>
    )
}

export default FinishedRecipesList;