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
    this.props.runSearch({
      song: this.state.songName,
      album: this.state.albumName,
      artist: this.state.artistName
    });
  }

  render() {
    return(
      <div>
        <form className="searchForm">
          <label htmlFor="songName">Song Name</label>
          <input
            type = "text"
            id = "songName"
            onChange = { this.updateSearchParams } />
          <label htmlFor="albumName">Album Name</label>
          <input
            type = "text"
            id = "albumName"
            onChange = { this.updateSearchParams } />
          <label htmlFor="artistName">Artist Name</label>
          <input
            type="text"
            id = "artistName"
            onChange = { this.updateSearchParams } />
          <input type="submit" id="submit" onClick={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

export default Search;
