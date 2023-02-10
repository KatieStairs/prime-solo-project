import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

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
}

export default editRecipeSaga;