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

function* unfinishedSaga() {
    yield takeEvery('SAGA/FETCH_UNFINISHED', fetchUnfinishedRecipes);
}

export default unfinishedSaga;