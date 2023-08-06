import React from "react";
import "../App.css";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovie } from "../actions/actions";
// import movies from "../reducers";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("updating :");
    });
    //make api call
    //dispatch action
    store.dispatch({
      addMovie(data)
    });
    // console.log("state :", store.getState());
  }

  render() {
    // console.log("this props :", this.props);
    // const { store } = this.props;
    // console.log("getState :",store.getState())
    // const movies = store.getState();
    // console.log("movies :", movies);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">movies</div>
            <div className="tab">favourites</div>
          </div>
          <div className="list">
            {data.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
