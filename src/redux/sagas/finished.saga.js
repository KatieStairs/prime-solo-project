import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFinishedRecipes() {
    try{
        const response = yield axios({
            method: 'GET',
            url: '/api/FinishedRecipes'
        })
        yield put({
            type: 'SET_FINISHED_LIST',
            payload: response.data
        })
    } catch (error) {
        console.log('fetchFinished fail:', error);
    }
}

function* deleteRecipe(action) {
    const idToDelete = action.payload;
    console.log('idToDelete', idToDelete);
    const response = yield axios({
        method: 'DELETE',
        url: `/api/FinishedRecipes/${idToDelete}`
    })
    yield put({
        type: 'SAGA/FETCH_FINISHED'
    })
}

function* fetchRecipeToView(action) {
    const idOfRecipeToView = action.payload;
    console.log('saga recipe to view', idOfRecipeToView)
    const response = yield axios({
        method: 'GET',
        url: `/api/FullRecipeView/${idOfRecipeToView}`
    })
    yield put({
        type: 'SET_RECIPE_TO_VIEW',
        payload: response.data
    })
}

function* createFinishedRecipe (action) {
    try{
        const newRecipe = action.payload
        console.log('newRecipe in createFinishedRecipe:', newRecipe.recipe_author)
        const response = yield axios({
            method: 'POST',
            url: '/api/FinishedRecipes',
            data: {
                finalized_author: newRecipe.recipe_author,
                finalized_recipe_name: newRecipe.recipe_name,
                finalized_ingredients: newRecipe.recipe_ingredients,
                finalized_directions: newRecipe.recipe_directions,
                finalized_notes: newRecipe.recipe_notes,
                user_id: newRecipe.user_id
            }
        })
        // yield put({
        //     type: 'SAGA/FETCH_UNFINISHED',
        // })
    } catch (error) {
        console.log('createFinishedRecipe fail:', error);
    }
}

function* finishedSaga() {
    yield takeEvery('SAGA/FETCH_FINISHED', fetchFinishedRecipes);
    yield takeEvery('SAGA/DELETE_FINISHED', deleteRecipe);
    yield takeEvery('FETCH_RECIPE_TO_VIEW', fetchRecipeToView);
    yield takeEvery('SAGA/CREATE_FINISHED_RECIPE', createFinishedRecipe)
}

export default finishedSaga;