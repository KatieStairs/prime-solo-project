import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@material-ui/core/Input';
import { TextField, Box } from '@material-ui/core';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function EditRecipeForm() {

    const params = useParams();
    const dispatch = useDispatch();
    const recipeToView = useSelector((store) => store.recipeToView);
    const history = useHistory();

    useEffect(() => {
        console.log('params.id', params.id)
        dispatch({
            type: 'FETCH_RECIPE_TO_VIEW',
            payload: params.id
        })
    }, []);

    // const handleRecipeNameSubmit = (event) => {
    //     console.log('event.target.value Name PUT SAGA', event.target.value)
    //     dispatch({
    //         type: 'SET_RECIPE_NAME',
    //         payload: event.target.value
    //     })
    // }

    // const handleRecipeAuthorSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'SET_RECIPE_AUTHOR',
    //         payload: event.target.value
    //     })
    // }

    // const handleRecipeIngredientsSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'SET_RECIPE_INGREDIENTS',
    //         payload: event.target.value
    //     })
    // }

    // const handleRecipeDirectionsSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'SET_RECIPE_DIRECTIONS',
    //         payload: event.target.value
    //     })
    // }

    // const handleRecipeNotesSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'SET_RECIPE_NOTES',
    //         payload: event.target.value
    //     })
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('handleSubmit', recipeToEdit)
    //     dispatch({
    //         type: 'UPDATE_RECIPE',
    //         payload: recipeToEdit
    //     })
    //     // history.push('/UnfinishedRecipes')
    // }

    return (
        <div>
            <Card>
                <h1>{recipeToView.finalized_recipe_name}</h1>
                By {recipeToView.finalized_author}
                <h4>Ingredients: {recipeToView.finalized_ingredients}</h4>
                <h4>Directions: {recipeToView.finalized_directions}</h4>
                <h4>Notes: {recipeToView.finalized_notes}</h4>
            </Card>
        </div>
    )
}

export default EditRecipeForm;