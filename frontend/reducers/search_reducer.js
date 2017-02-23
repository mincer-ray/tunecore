import { RECEIVE_RESULTS, CLEAR_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = {results: [], random: []}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      newState.results = action.results;
      return newState;
    case CLEAR_RESULTS:
      newState = {results: [], random: []};
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
