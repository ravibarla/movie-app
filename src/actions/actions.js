// {
//   type: "INCREASE_COUNT";
// }
// {
//   type: "DECREASE_COUNT";
// }

//action type
export const ADD_MOVIES = "add movies";
export const ADD_FAV = "add favourites";
export const REMOVE_FAV_MOVIES = "remove favourites";
export const SET_SHOW_FAV = "set show favourites";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
//action creator
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
export const addFav = (movie) => {
  return {
    type: ADD_FAV,
    movie,
  };
};
export const remFav = (movie) => {
  return {
    type: REMOVE_FAV_MOVIES,
    movie,
  };
};
export const setShowFav = (val) => {
  return {
    type: SET_SHOW_FAV,
    val,
  };
};
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function handleMovieSearch(searchText) {
  const url = `http://www.omdbapi.com/?apikey=b0729fb3&t=${searchText}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie :", movie);
        //dispatch action
        dispatch(addMoviesSearchResult(movie));
      });
  };
}

export function addMoviesSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
