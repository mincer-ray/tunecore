import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ results: newProps.results });
  }

  formatResults() {
    return (Object.keys(this.state.results).map(key => {
      const result = this.state.results[key];
      return (
        <tr key={ key }>
          <td>{ `${key}` }</td>
          <td>{ `${result.song}` }</td>
          <td>{ `${result.artist}` }</td>
          <td>{ `${result.album}` }</td>
        </tr>
      );
    }));
  }

  render() {
    if (Object.keys(this.state.results).length > 0) {
      return (
        <div>
          <table>
            { this.formatResults() }
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <p>No Results</p>
        </div>
      );
    }
  }
}

export default Results;
