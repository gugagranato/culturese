import { all, takeLatest } from 'redux-saga/effects';

import { BooksTypes } from '~/store/ducks/books';

import { load } from './books';

export default function* rootSaga() {
  yield all([takeLatest(BooksTypes.LOAD_REQUEST, load)]);
}
