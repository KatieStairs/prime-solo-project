import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@material-ui/core/Input';

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
        history.push('/UnfinishedRecipes')
    }

    const handleRecipeIngredientsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_INGREDIENTS',
            payload: recipeToEdit
        })
        history.push('/UnfinishedRecipes')
    }

    const handleRecipeDirectionsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_DIRECTIONS',
            payload: recipeToEdit
        })
        history.push('/UnfinishedRecipes')
    }

    const handleRecipeNotesSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE_NOTES',
            payload: recipeToEdit
        })
        history.push('/UnfinishedRecipes')
    }

    return (
        <div>
            <h2>Edit Recipe</h2>

            <form>
                <Input 
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
                <button onClick={handleRecipeNotesSubmit}>Notes Submit</button>
            </form>
        </div>
    )
}

export default EditRecipeForm;