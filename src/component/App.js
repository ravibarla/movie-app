import React from "react";
// import {connect} from "redux"
import "../App.css";
import { data as movieList } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFav } from "../actions/actions";
import { connect } from "../index";
// import state from "../reducers";
class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   // console.log("updating :");
    //   this.forceUpdate();
    // });
    //make api call
    //dispatch action
    // store.dispatch(addMovies(movieList));
    this.props.dispatch(addMovies(movieList));
    // store.dispatch(addMovies(data));
    // console.log("state :", store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.fav.indexOf(movie);
    if (index !== -1) {
      //found the movie
      return true;
    }
    //movie not found
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFav(val));
  };

  render() {
    // console.log("this props :", this.props);
    // const { store } = this.props;this.props
    // console.log("getState :",store.getState())
    // const { movies } = this.props;
    // console.log("movies :", movies);
    const { movies, search } = this.props;
    const { list, fav, showFav } = movies;

    const displayMovies = showFav ? fav : list;
    // console.log("list :", list);
    // console.log("fav :", fav);
    // console.log("displayMovies :", displayMovies);
    // return <storeContext.Consumer></storeContext.Consumer>;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFav ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              movies
            </div>
            <div
              className={`tab ${showFav ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              favourites
            </div>
          </div>
          <div className="list">
            {displayMovies &&
              displayMovies.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                  param
                />
              ))}
          </div>
          {/* {displayMovies.length === 0 ? (
            <div className="no-movies">no movies to show</div>
          ) : null} */}
        </div>
      </div>
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <storeContext.Consumer>
//         {(store) => <App store={store} />}
//       </storeContext.Consumer>
//     );
//   }
// }
// export default AppWrapper;

function mapStateToProps(state) {
  return {
    movies: state.movies,
    // search: state.movies,
    search: state.search,
  };
}
const connectedAppCompnent = connect(mapStateToProps)(App);
export default connectedAppCompnent;
