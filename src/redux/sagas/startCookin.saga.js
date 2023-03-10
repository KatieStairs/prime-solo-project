import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* createRecipe (action) {
    try{
        const newRecipe = action.payload
        console.log('newRecipe in createRecipe:', newRecipe)
        const response = yield axios({
            method: 'POST',
            url: '/api/StartCookin',
            data: {
                recipe_author: newRecipe.recipe_author,
                recipe_name: newRecipe.recipe_name,
                recipe_ingredients: newRecipe.recipe_ingredients,
                recipe_directions: newRecipe.recipe_directions,
                recipe_notes: newRecipe.recipe_notes,
                user_id: newRecipe.user_id
            }
        })
        yield put({
            type: 'SAGA/FETCH_UNFINISHED',
        })
    } catch (error) {
        console.log('createRecipe fail:', error);
    }
}

function* startCookinSaga() {
    yield takeEvery('SAGA/CREATE_RECIPE', createRecipe);
}

export default startCookinSaga;