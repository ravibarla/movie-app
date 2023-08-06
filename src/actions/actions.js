// {
//   type: "INCREASE_COUNT";
// }
// {
//   type: "DECREASE_COUNT";
// }

//action type
export const ADD_MOVIES = "add movies";
//action creator
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
