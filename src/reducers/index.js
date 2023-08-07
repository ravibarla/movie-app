import {
  ADD_FAV,
  ADD_MOVIES,
  ADD_SEARCH_RESULT,
  REMOVE_FAV_MOVIES,
  SET_SHOW_FAV,
  ADD_MOVIE_TO_LIST,
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
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  // ADD_SEARCH_RESULT;
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}
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
