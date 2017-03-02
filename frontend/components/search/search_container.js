import { connect } from 'react-redux';
import { runSearch, loadingResults } from '../../actions/search_actions';
import Search from './search';

function mapStateToProps(state) {
  return ({ state });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    runSearch: (query) => dispatch(runSearch(query)),
    loadingResults: () => dispatch(loadingResults()),
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
