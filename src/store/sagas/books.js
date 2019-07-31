/* eslint-disable quotes */
import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import BooksActions from "~/store/ducks/books";

export function* load() {
  try {
    const response = yield call(api.get, "books");

    yield put(BooksActions.loadSuccess(response.data));
  } catch (error) {
    yield put(BooksActions.loadFailure());
  }
}
