import { ADD_MOVIES } from "../actions/actions";
//initial state
const initialMoviesState = {
  list: [],
  fav: [],
};
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
