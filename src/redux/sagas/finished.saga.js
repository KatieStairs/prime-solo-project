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

function* finishedSaga() {
    yield takeEvery('SAGA/FETCH_FINISHED', fetchFinishedRecipes);
    yield takeEvery('SAGA/DELETE_FINISHED', deleteRecipe)
}

export default finishedSaga;