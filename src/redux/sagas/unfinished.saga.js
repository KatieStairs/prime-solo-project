import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUnfinishedRecipes() {
    try{
        const response = yield axios({
            method: 'GET',
            url: '/api/UnfinishedRecipes'
        })
        yield put({
            type: 'SET_UNFINISHED_LIST',
            payload: response.data
        })
    } catch (error) {
        console.log('fetchUnfinished fail:', error);
    }
}

function* deleteRecipe(action) {
    const idToDelete = action.payload;
    console.log('idToDelete', idToDelete);
    const response = yield axios({
        method: 'DELETE',
        url: `/api/UnfinishedRecipes/${idToDelete}`
    })
    yield put({
        type: 'SAGA/FETCH_UNFINISHED'
    })
}

function* unfinishedSaga() {
    yield takeEvery('SAGA/FETCH_UNFINISHED', fetchUnfinishedRecipes);
    yield takeEvery('SAGA/DELETE_UNFINISHED', deleteRecipe);
}

export default unfinishedSaga;