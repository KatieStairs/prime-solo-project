import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function FinishedRecipes() {
    const dispatch = useDispatch();
    const finishedRecipesList = useSelector(store => store.finishedRecipesList);

    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_FINISHED'
        })
    }, []);

    const deleteRecipe = (event) => {
        useEffect(() => {
            dispatch({
                type: 'SAGA/DELETE_RECIPE',
                payload: finished.id
            })
        }, []);
    }

    return (
        <div>
            <h3>Finished Recipes List:</h3>
            {finishedRecipesList.map((finished) => {
                    return <Box
                    key={finished.id}
                    mx={6}
                    my={3}
                    border={4}
                    px={2}
                    py={3}
                    borderColor="black"
                    height={75}
                    width={800}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="white"
                    color="black"
                    fontSize={40}
                >
                    {finished.finalized_recipe_name} By {finished.finalized_author}    
                    <Button variant="contained">View</Button>
                    <Button variant="contained" onClick={deleteRecipe}>Delete</Button>
                </Box>
                })}
        </div>
    )
}

export default FinishedRecipes;