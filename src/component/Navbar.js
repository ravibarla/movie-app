import React from "react";
// import { data } from "../data";
import { addMovieToList, handleMovieSearch } from "../actions/actions";
import { storeContext } from "../index";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    // const { result } = this.state;
    // const { showSearchResults } = this.state;
    const { result: movie, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    ADD TO MOVIE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
class NavbarWraper extends React.Component {
  render() {
    return (
      <storeContext.Consumer>
        {(store) => (
          <Navbar dispatch={store.dispatch} search={this.props.search} />
        )}
      </storeContext.Consumer>
    );
  }
}
export default NavbarWraper;
