import { put, call } from 'redux-saga/effects';
import { loadingStatus } from '../actions/Loading';
import { receiveItems } from '../actions/Home';
import axios from 'axios';

export function* fetchItems() {
    try {
        yield put(loadingStatus(true));
        const json = yield call([axios, 'get'], 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc');
        yield put(receiveItems(json.data.articles));

        yield put(loadingStatus(false));

    }catch (error) {

        yield put(loadingStatus(false));

    }
    
}