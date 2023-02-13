import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UnfinishedRecipeItem from './UnfinishedRecipeItem';

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
            <h3>Unfinished Recipes List:</h3>
            {unfinishedRecipesList.map((unfinished) => {
                    return <UnfinishedRecipeItem key={unfinished.id} unfinished={unfinished} />
                //     <Box
                //     key={unfinished.id}
                //     mx={6}
                //     my={3}
                //     border={4}
                //     px={2}
                //     py={3}
                //     borderColor="black"
                //     height={75}
                //     width={800}
                //     display="flex"
                //     justifyContent="center"
                //     alignItems="center"
                //     bgcolor="white"
                //     color="black"
                //     fontSize={40}
                // >
                //     {unfinished.recipe_name} By {unfinished.recipe_author}    
                //     <Button variant="contained">Edit</Button>
                //     <Button variant="contained">Share</Button>
                // </Box>
                })}
        </div>
    )
}

export default UnfinishedRecipesList;