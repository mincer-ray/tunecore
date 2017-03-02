import { LOADING_RESULTS, RECEIVE_RESULTS } from '../actions/search_actions';

const defaultState = {loading: false};

const LoadingReducer = (state = defaultState, action) => {
  let newState = defaultState;
  Object.freeze(state);
  
  switch (action.type) {
    case LOADING_RESULTS:
      newState = {loading: true};
      return newState;
    case RECEIVE_RESULTS:
      newState = defaultState;
      return newState;
    default:
      return state;
  }
};

export default LoadingReducer;
