import { connect } from 'react-redux';
import Results from './results';

function mapStateToProps({ results }) {
  if (results === undefined) results = {};
  return ({ results });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({ dispatch });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
