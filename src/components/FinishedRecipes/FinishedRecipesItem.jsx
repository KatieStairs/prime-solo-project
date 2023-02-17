import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function FinishedRecipesItem ({ finished }) {
    const dispatch = useDispatch();


    const deleteRecipe = () => {
        dispatch({
            type: 'SAGA/DELETE_FINISHED',
            payload: finished.recipe_id
        })
        console.log('*********** finished', finished)
    }


    return (
        <Box
            key={finished.recipe_id}
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
    )
}

export default FinishedRecipesItem;