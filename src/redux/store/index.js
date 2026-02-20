import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import favouriteReducer from "../reducers/favouriteReducer";
import playerReducer from "../reducers/playerReducer";

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    searched: searchReducer,
    player: playerReducer,
  },
});

export default store;
