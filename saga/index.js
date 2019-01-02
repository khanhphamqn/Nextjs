import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchItems } from '../api/fetchItems';
import { FETCH_ITEMS } from '../constants/Home';

function* actionWatcher() {
  yield takeLatest(FETCH_ITEMS, fetchItems)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
