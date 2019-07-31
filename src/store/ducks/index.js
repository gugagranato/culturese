/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import { reducer as books } from './books';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  books,
});

export default reducers;
