import { search } from '../util/search_api_util';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const LOADING_RESULTS = "LOADING_RESULTS";

export const runSearch = (query) => {
  return (dispatch) => {
    return search(query)
      .then(
        results => dispatch(receiveResults(results)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const loadingResults = () => ({
  type: LOADING_RESULTS
});

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
});
