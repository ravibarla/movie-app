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
//action creator
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
export const addFav = (movie) => {
  return {
    type: ADD_MOVIES,
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
