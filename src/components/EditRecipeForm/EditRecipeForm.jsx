import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_RECIPE',
            payload: recipeToEdit
        })
        history.push('/UnfinishedRecipes')
    }

    return (
        <div>
            <h2>Edit Recipe</h2>

            <form>
                <input 
                    type="text"
                    value={recipeToEdit.recipe_name}
                    onChange={handleRecipeNameChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default EditRecipeForm;