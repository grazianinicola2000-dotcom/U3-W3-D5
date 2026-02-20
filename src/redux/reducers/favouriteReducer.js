import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, ADD_FAV_DUPLICATE, RESET_DUPLICATE } from "../actions";

const initialState = {
  content: [],
  duplicate: false,
};

const favouriteReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: {
      const exist = currentState.content.find((song) => song.id === action.payload.id);
      if (exist) return currentState;
      return {
        ...currentState,
        content: [...currentState.content, action.payload],
      };
    }
    case REMOVE_FROM_FAVOURITE:
      return {
        ...currentState,

        content: currentState.content.filter((_, i) => i !== action.payload),
      };
    case ADD_FAV_DUPLICATE:
      return {
        ...currentState,
        duplicate: true,
      };
    case RESET_DUPLICATE:
      return {
        ...currentState,
        duplicate: false,
      };
    default:
      return currentState;
  }
};

export default favouriteReducer;
