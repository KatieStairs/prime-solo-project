import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@material-ui/core/Input';
import { TextField, Box } from '@material-ui/core';

function EditRecipeForm() {

    const params = useParams();
    const dispatch = useDispatch();
    const recipeToEdit = useSelector((store) => store.recipeToEdit);
    const history = useHistory();

    useEffect(() => {
        console.log('params.id', params.id)
        dispatch({
            type: 'FETCH_RECIPE_TO_EDIT',
            payload: params.id
        })
    }, []);

    const handleRecipeNameChange = (event) => {
        dispatch({
            type: 'SET_RECIPE_NAME',
            payload: event.target.value
        })
    }

    const handleRecipeIngredientsChange = (event) => {
        dispatch({
            type: 'SET_RECIPE_INGREDIENTS',
            payload: event.target.value
        })
    }

    const handleRecipeDirectionsChange = (event) => {
        dispatch({
            type: 'SET_RECIPE_DIRECTIONS',
            payload: event.target.value
        })
    }

    const handleRecipeNotesChange = (event) => {
        dispatch({
            type: 'SET_RECIPE_NOTES',
            payload: event.target.value
        })
    }

    const handleRecipeNameSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_NAME',
            payload: recipeToEdit
        })
        // history.push('/UnfinishedRecipes')
    }

    const handleRecipeAuthorSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_AUTHOR',
            payload: recipeToEdit
        })
        // history.push('/UnfinishedRecipes')
    }

    const handleRecipeIngredientsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_INGREDIENTS',
            payload: recipeToEdit
        })
        // history.push('/UnfinishedRecipes')
    }

    const handleRecipeDirectionsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_DIRECTIONS',
            payload: recipeToEdit
        })
        // history.push('/UnfinishedRecipes')
    }

    const handleRecipeNotesSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_NOTES',
            payload: recipeToEdit
        })
        // history.push('/UnfinishedRecipes')
    }

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form>
                <h4>Recipe Name:</h4>
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
                    // label="Edit Recipe Name:"
                    multiline
                    minRows={3.5}
                    defaultValue={recipeToEdit.recipe_name || ''}
                    fullWidth
                />
                </Box>
            <button onClick={handleRecipeNameSubmit}>Recipe Name Submit</button>
                <h4>Recipe Author:</h4>
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
                    fullWidth
                />
                </Box>
            <button onClick={handleRecipeAuthorSubmit}>Recipe Name Submit</button>
                <h4>Recipe Ingredients:</h4>
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
                    fullWidth
                />
                </Box>
            <button onClick={handleRecipeIngredientsSubmit}>Recipe Name Submit</button>
                <h4>Recipe Directions:</h4>
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
                    fullWidth
                />
                </Box>
            <button onClick={handleRecipeDirectionsSubmit}>Recipe Name Submit</button>
                <h4>Recipe Notes:</h4>
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
                    fullWidth
                />
                </Box>
            <button onClick={handleRecipeNotesSubmit}>Recipe Name Submit</button>
                {/* <Input 
                    type="text"
                    value={recipeToEdit.recipe_name || ''}
                    onChange={handleRecipeNameChange}
                />
                <button onClick={handleRecipeNameSubmit}>Recipe Name Submit</button>
                <input 
                    type="text"
                    value={recipeToEdit.recipe_ingredients || ''}
                    onChange={handleRecipeIngredientsChange}
                />
                <button onClick={handleRecipeIngredientsSubmit}>Ingredients Submit</button>
                <input 
                    type="text"
                    value={recipeToEdit.recipe_directions || ''}
                    onChange={handleRecipeDirectionsChange}
                />
                <button onClick={handleRecipeDirectionsSubmit}>Directions Submit</button>
                <input 
                    type="text"
                    value={recipeToEdit.recipe_notes || ''}
                    onChange={handleRecipeNotesChange}
                />
                <button onClick={handleRecipeNotesSubmit}>Notes Submit</button> */}
            </form>
        </div>
    )
}

export default EditRecipeForm;