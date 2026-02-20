import { SET_CURRENT_SONG } from "../actions";

const initialState = {
  currentSong: null,
};

const playerReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...currentState,
        currentSong: action.payload,
      };

    default:
      return currentState;
  }
};

export default playerReducer;
