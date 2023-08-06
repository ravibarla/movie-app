import React from "react";
import "../App.css";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFav } from "../actions/actions";
// import movies from "../reducers";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("updating :");
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    // console.log("state :", store.getState());
  }
  isMovieFavourite = (movie) => {
    const { fav } = this.props.store.getState();
    const index = fav.indexOf(movie);
    if (index !== -1) {
      //found the movie
      return true;
    }
    //movie not found
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFav(val));
  };
  render() {
    // console.log("this props :", this.props);
    // const { store } = this.props;
    // console.log("getState :",store.getState())
    const { list, fav, showFav } = this.props.store.getState();
    const displayMovies = showFav ? fav : list;
    // console.log("movies :", list);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFav ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(true)}
            >
              movies
            </div>
            <div
              className={`tab ${showFav ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(false)}
            >
              favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">no movies to show</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
