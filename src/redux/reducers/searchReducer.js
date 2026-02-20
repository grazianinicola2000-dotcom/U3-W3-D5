import { GET_SONGS, GET_SONGS_ERROR } from "../actions";

const initialState = {
  songs: [],
  error: false,
};

const searchReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...currentState,
        songs: action.payload,
        loading: false,
      };
    case GET_SONGS_ERROR:
      return {
        ...currentState,
        error: true,
      };
    default:
      return currentState;
  }
};

export default searchReducer;
