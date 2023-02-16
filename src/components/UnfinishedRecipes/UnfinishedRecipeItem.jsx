import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Favorite } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function UnfinishedRecipeItem({ unfinished }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const goToEditIngredientsPage = () => {
        history.push(`/EditRecipe/${unfinished.recipe_id}`)
    }

    const deleteRecipe = () => {
        dispatch({
            type: 'SAGA/DELETE_UNFINISHED',
            payload: unfinished.recipe_id
        })
    }

    return (
            <Box
                key={unfinished.recipe_id}
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
            {unfinished.recipe_name} By {unfinished.recipe_author}
            <Button variant="contained" onClick={goToEditIngredientsPage}>Edit Recipe</Button>
            <Button variant="contained" onClick={deleteRecipe}>Delete</Button>
        </Box>
    )
}

export default UnfinishedRecipeItem;