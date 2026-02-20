import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    searched: searchReducer,
  },
});

export default store;
