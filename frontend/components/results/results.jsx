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
          <td className='songKey'>{ `${key}` }</td>
          <td className='songName'>{ `${result.song}` }</td>
          <td className='artistName'>{ `${result.artist}` }</td>
          <td className='albumName'>{ `${result.album}` }</td>
        </tr>
      );
    }));
  }

  render() {
    if (Object.keys(this.state.results).length > 0) {
      return (
        <div>
          <table className='resultsBox'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody>
              { this.formatResults() }
            </tbody>
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
