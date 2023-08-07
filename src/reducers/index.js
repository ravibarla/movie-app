import {
  ADD_FAV,
  ADD_MOVIES,
  REMOVE_FAV_MOVIES,
  SET_SHOW_FAV,
} from "../actions/actions";
import { combineReducers } from "redux";
//initial state
const initialMoviesState = {
  list: [],
  fav: [],
  showFav: false,
};
export function movies(state = initialMoviesState, action) {
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
const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {}
const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
export default combineReducers({
  movies,
  search,
});
