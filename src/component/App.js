import React from "react";
import "../App.css";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies } from "../actions/actions";
// import movies from "../reducers";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("updating :");
      this.forceUpdate()
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    // console.log("state :", store.getState());
  }

  render() {
    // console.log("this props :", this.props);
    // const { store } = this.props;
    // console.log("getState :",store.getState())
    const { list } = this.props.store.getState();
    // console.log("movies :", list);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">movies</div>
            <div className="tab">favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`list-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
