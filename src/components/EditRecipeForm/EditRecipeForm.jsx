import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@material-ui/core/Input';
import { TextField, Box } from '@material-ui/core';
import Button from 'react-bootstrap/Button'

function EditRecipeForm() {

    const params = useParams();
    const dispatch = useDispatch();
    const recipeToEdit = useSelector((store) => store.recipeToEdit);
    const history = useHistory();
    const user = useSelector(store => store.user)

    useEffect(() => {
        console.log('params.id', params.id)
        dispatch({
            type: 'FETCH_RECIPE_TO_EDIT',
            payload: params.id
        })
    }, []);

    const handleRecipeNameSubmit = (event) => {
        console.log('event.target.value Name PUT SAGA', event.target.value)
        dispatch({
            type: 'SET_RECIPE_NAME',
            payload: event.target.value
        })
    }

    const handleRecipeAuthorSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_RECIPE_AUTHOR',
            payload: event.target.value
        })
    }

    const handleRecipeIngredientsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_RECIPE_INGREDIENTS',
            payload: event.target.value
        })
    }

    const handleRecipeDirectionsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_RECIPE_DIRECTIONS',
            payload: event.target.value
        })
    }

    const handleRecipeNotesSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_RECIPE_NOTES',
            payload: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit', recipeToEdit)
        dispatch({
            type: 'UPDATE_RECIPE',
            payload: recipeToEdit
        })
        // history.push('/UnfinishedRecipes')
    }


    const addNewRecipe = (event) => {
        console.log('user', user.id, user.username, 'adding', recipeToEdit.recipe_name)
            dispatch({
                type: 'SAGA/CREATE_FINISHED_RECIPE',
                payload: {
                recipe_author: recipeToEdit.recipe_author,
                recipe_name: recipeToEdit.recipe_name,
                recipe_ingredients: recipeToEdit.recipe_ingredients,
                recipe_directions: recipeToEdit.recipe_directions,
                recipe_notes: recipeToEdit.recipe_notes,
                user_id: user.id
          }
        })
    }

    const handleFinalSubmit = (event) => {
        event.preventDefault();
        console.log('handleFinalSubmit', recipeToEdit)
        dispatch({
            type: 'SAGA/CREATE_FINISHED_RECIPE',
            payload: recipeToEdit
        })
        addNewRecipe();
        history.push('/FinishedRecipes')
    }

    return (
        <div>
            <form>
                {/* <h1>Edit Recipe</h1> */}
                <h4>Recipe Name:</h4>
                <Box 
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={52}
                width={800}
                display="flex"
                justifyContent="left"
                alignItems="left"
                bgcolor="white"
                color="black"
                fontSize={14}
                >
                <TextField
                    id="outlined-multiline-static"
                    // label="Edit Recipe Name:"
                    multiline
                    minRows={3.5}
                    defaultValue={recipeToEdit.recipe_name || ''}
                    onChange={handleRecipeNameSubmit}
                    fullWidth
                />
                <Button onClick={handleSubmit}>Update Name</Button>
                </Box>
                <h3>Recipe Author:</h3>
                <Box //onChange={(event) => setIngredientsInput(event.target.value)}
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={52}
                width={800}
                display="flex"
                justifyContent="left"
                alignItems="left"
                bgcolor="white"
                color="black"
                fontSize={14}
                >
                <TextField
                    id="outlined-multiline-static"
                    // label="Edit Recipe Author:"
                    multiline
                    minRows={3.5}
                    defaultValue={recipeToEdit.recipe_author || ''}
                    onChange={handleRecipeAuthorSubmit}
                    fullWidth
                />
            <Button onClick={handleSubmit}>Update Author</Button>
            </Box>
                <h2>Recipe Ingredients:</h2>
                <Box //onChange={(event) => setIngredientsInput(event.target.value)}
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={148}
                width={800}
                display="flex"
                justifyContent="left"
                alignItems="left"
                bgcolor="white"
                color="black"
                fontSize={14}
                >
                <TextField
                    id="outlined-multiline-static"
                    // label="Edit Recipe Ingredients:"
                    multiline
                    minRows={8.5}
                    defaultValue={recipeToEdit.recipe_ingredients || ''}
                    onChange={handleRecipeIngredientsSubmit}
                    fullWidth
                />
                <Button onClick={handleSubmit}>Update Recipe Ingredients</Button>
                </Box>
                <h2>Recipe Directions:</h2>
                <Box //onChange={(event) => setIngredientsInput(event.target.value)}
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={148}
                width={800}
                display="flex"
                justifyContent="left"
                alignItems="left"
                bgcolor="white"
                color="black"
                fontSize={14}
                >
                <TextField
                    id="outlined-multiline-static"
                    // label="Edit Recipe Directions:"
                    multiline
                    minRows={8.5}
                    defaultValue={recipeToEdit.recipe_directions || ''}
                    onChange={handleRecipeDirectionsSubmit}
                    fullWidth
                />
                <Button onClick={handleSubmit}>Update Recipe Directions</Button>
                </Box>
                <h2>Recipe Notes:</h2>
                <Box //onChange={(event) => setIngredientsInput(event.target.value)}
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={148}
                width={800}
                display="flex"
                justifyContent="left"
                alignItems="left"
                bgcolor="white"
                color="black"
                fontSize={14}
                >
                <TextField
                    id="outlined-multiline-static"
                    // label="Edit Recipe Notes:"
                    multiline
                    minRows={8.5}
                    defaultValue={recipeToEdit.recipe_notes || ''}
                    onChange={handleRecipeNotesSubmit}
                    fullWidth
                />
                <Button onClick={handleSubmit}>Update Recipe Notes</Button>
                </Box>
            </form>
            <Button onClick={handleFinalSubmit}>Save Finished Recipe</Button>
        </div>
    )
}

export default EditRecipeForm;