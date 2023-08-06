import "../App.css";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { createStore } from "redux";
import movies from "../reducers";
function App() {
  const store = createStore(movies);
  console.log("store : ",store)
  console.log("state :",store.getState())
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">movies</div>
          <div className="tab">favourites</div>
        </div>
        <div className="list">
          {data.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
