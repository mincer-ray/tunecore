import { RECEIVE_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = {results: []}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      newState.results = action.results;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
