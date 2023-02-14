import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipeToEdit(action) {
    const idOfRecipeToEdit = action.payload;
    console.log('saga recipe to edit', idOfRecipeToEdit)
    const response = yield axios({
        method: 'GET',
        url: `/api/EditRecipe/${idOfRecipeToEdit}`
    })
    yield put({
        type: 'SET_RECIPE_TO_EDIT',
        payload: response.data
    })
}

function* updateRecipeName(action) {
    const editedRecipeName = action.payload;
    console.log('update Recipe Name saga', action.payload.recipe_id)
    yield axios ({
        method: 'PUT',
        url: `/api/EditRecipe/${editedRecipeName.recipe_id}`,
        data: editedRecipeName
    })
    yield put({
        type: 'SAGA/FETCH_UNFINISHED'
    })
}

function* updateRecipeIngredients(action) {
    const editedRecipeIngredients = action.payload.recipe_ingredients;
    console.log('update Recipe Name saga', action.payload.recipe_ingredients)
    yield axios ({
        method: 'PUT',
        url: `/api/EditRecipe/${editedRecipeIngredients.recipe_id}`,
        data: editedRecipeIngredients
    })
    yield put({
        type: 'SAGA/FETCH_UNFINISHED'
    })
}

function* addIngredients(action) {
    try{
        yield axios({
            method: 'POST',
            url: '/api/EditRecipe/Ingredients',
            data: {
                recipeIngredients: action.payload
            }
        })
        yield put({ type: 'SAGA/FETCH_INGREDIENTS'})
    } catch (error) {
        console.log('POST ingredients fail:', error);
    }
}

function* addDirections(action) {
    try{
        yield axios({
            method: 'POST',
            url: '/api/EditRecipe/Directions',
            data: {
                recipeDirections: action.payload
            }
        })
        yield put({ type: 'SAGA/FETCH_DIRECTIONS'})
    } catch (error) {
        console.log('POST directions fail:', error);
    }
}

function* addNotes(action) {
    try{
        yield axios({
            method: 'POST',
            url: '/api/EditRecipe/Notes',
            data: {
                recipeNotes: action.payload
            }
        })
        yield put({ type: 'SAGA/FETCH_NOTES'})
    } catch (error) {
        console.log('POST notes fail:', error);
    }
}

function* editRecipeSaga() {
    yield takeEvery('ADD_INGREDIENTS', addIngredients);
    yield takeEvery('ADD_DIRECTIONS', addDirections);
    yield takeEvery('ADD_NOTES', addNotes);
    yield takeEvery('FETCH_RECIPE_TO_EDIT', fetchRecipeToEdit);
    yield takeEvery('UPDATE_RECIPE_NAME', updateRecipeName);
    yield takeEvery('UPDATE_RECIPE_INGREDIENTS', updateRecipeIngredients)
}

export default editRecipeSaga;