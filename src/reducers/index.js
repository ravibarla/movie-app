import {
  ADD_FAV,
  ADD_MOVIES,
  REMOVE_FAV_MOVIES,
  SET_SHOW_FAV,
} from "../actions/actions";
//initial state
const initialMoviesState = {
  list: [],
  fav: [],
  showFav: false,
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
        fav: [action.movie, ...state.fav],
      };
    case REMOVE_FAV_MOVIES:
      const filteredArray = state.fav.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        fav: filteredArray,
      };
    case SET_SHOW_FAV:
      return {
        ...state,
        showFav: action.val,
      };
    default:
      return state;
  }
}
