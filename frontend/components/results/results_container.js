import { connect } from 'react-redux';
import Results from './results';

function mapStateToProps({ search, loading }) {
  return ({
    results: search.results,
    loading: loading.loading
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({ dispatch });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
