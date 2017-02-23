import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songName: "",
      albumName: "",
      artistName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchParams = this.updateSearchParams.bind(this);
  }

  updateSearchParams(e) {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <form>
          <label>Song Name
            <input
              type = "text"
              id = "songName"
              onChange = { this.updateSearchParams } />
          </label>
          <label>Album Name
            <input
              type = "text"
              id = "albumName"
              onChange = { this.updateSearchParams } />
          </label>
          <label>Artist Name
            <input
              type="text"
              id = "artistName"
              onChange = { this.updateSearchParams } />
          </label>
          <input type="submit" onClick={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

module.exports = Search;
