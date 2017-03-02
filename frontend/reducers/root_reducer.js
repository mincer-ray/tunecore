import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  loading: LoadingReducer
});

export default rootReducer;
