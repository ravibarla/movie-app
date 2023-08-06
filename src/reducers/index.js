import { ADD_FAV, ADD_MOVIES } from "../actions/actions";
//initial state
const initialMoviesState = {
  list: [],
  fav: [],
};
export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAV:
      return {
        ...state,
        fav: [action.movies, ...state.fav],
      };
    default:
      return state;
  }
}
