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

function* updateRecipe(action) {
    const editedRecipe = action.payload;
    yield axios({
        method: 'PUT',
        url: `/api/EditRecipe/${editedRecipe.recipe_id}`,
        data: editedRecipe
    })
    //TODO: May want a yield put FETCH_UNFINISHED_RECIPES route here
}

function* editRecipeSaga() {
    yield takeEvery('FETCH_RECIPE_TO_EDIT', fetchRecipeToEdit);
    yield takeEvery('UPDATE_RECIPE', updateRecipe)
    // yield takeEvery('SAGA/UPDATE_RECIPE_NAME', updateRecipeName);
    // yield takeEvery('SAGA/UPDATE_RECIPE_AUTHOR', updateRecipeAuthor)
    // yield takeEvery('SAGA/UPDATE_RECIPE_INGREDIENTS', updateRecipeIngredients);
    // yield takeEvery('SAGA/UPDATE_RECIPE_DIRECTIONS', updateRecipeDirections);
    // yield takeEvery('SAGA/UPDATE_RECIPE_NOTES', updateRecipeNotes);
}

export default editRecipeSaga;