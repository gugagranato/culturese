/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ["data"],
  loadFailure: null
});

/*
  loadSuccess: (data) => ({ type: 'LOAD_SUCCESS', data})
*/

export const BooksTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: []
});

/* angiamente tínhamos algo como:
  function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'LOAD_SUCCESS':
        return { ...state, loading: true};
    }
} */

/*
  Reducer
*/

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data })
});
