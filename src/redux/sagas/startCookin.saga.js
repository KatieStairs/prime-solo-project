import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* createRecipe (action) {
    console.log('createRecipe *****', action.payload)
    try{
        const newRecipe = action.payload
        const response = yield axios({
            method: 'POST',
            url: '/api/StartCookin',
            data: newRecipe
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