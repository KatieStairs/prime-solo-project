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

// function* updateRecipeName(action) {
//     const editedRecipeName = action.payload;
//     console.log('Update Recipe Name Saga', action.payload.recipe_id)
//     yield axios ({
//         method: 'PUT',
//         url: `/api/EditRecipe/${editedRecipeName.recipe_id}`,
//         data: editedRecipeName
//     })
//     yield put({
//         type: 'SAGA/FETCH_UNFINISHED'
//     })
// }


// function* updateRecipeAuthor(action) {
//     const editedRecipeAuthor = action.payload;
//     console.log('Update Recipe Author Saga', action.payload.recipe_id)
//     yield axios ({
//         method: 'PUT',
//         url: `/api/EditRecipe/${editedRecipeAuthor.recipe_id}`,
//         data: editedRecipeAuthor
//     })
//     yield put({
//         type: 'SAGA/FETCH_UNFINISHED'
//     })
// }

// function* updateRecipeIngredients(action) {
//     const editedRecipeIngredients = action.payload.recipe_ingredients;
//     console.log('Update Recipe Ingredients Saga', action.payload.recipe_id)
//     yield axios ({
//         method: 'PUT',
//         url: `/api/EditRecipe/${editedRecipeIngredients.recipe_id}`,
//         data: editedRecipeIngredients
//     })
//     yield put({
//         type: 'SAGA/FETCH_UNFINISHED'
//     })
// }

// function* updateRecipeDirections(action) {
//     const editedRecipeDirections = action.payload.recipe_id;
//     console.log('Update Recipe Directions Saga', action.payload.recipe_id)
//     yield axios ({
//         method: 'PUT',
//         url: `/api/EditRecipe/${editedRecipeDirections.recipe_id}`,
//         data: editedRecipeDirections
//     })
//     yield put({
//         type: 'SAGA/FETCH_UNFINISHED'
//     })
// }

// function* updateRecipeNotes(action) {
//     const editedRecipeNotes = action.payload.recipe_id;
//     console.log('Update Recipe Notes Saga', action.payload.recipe_id)
//     yield axios ({
//         method: 'PUT',
//         url: `/api/EditRecipe/${editedRecipeNotes.recipe_id}`,
//         data: editedRecipeNotes
//     })
//     yield put({
//         type: 'SAGA/FETCH_UNFINISHED'
//     })
// }

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