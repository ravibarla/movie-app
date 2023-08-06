// {
//   type: "INCREASE_COUNT";
// }
// {
//   type: "DECREASE_COUNT";
// }

//action type
export const ADD_MOVIES = "add movies";
export const ADD_FAV = "add favourites";
//action creator
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
export const addFav = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
