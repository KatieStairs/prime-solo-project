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

function* finishedSaga() {
    yield takeEvery('SAGA/FETCH_FINISHED', fetchFinishedRecipes);
}

export default finishedSaga;