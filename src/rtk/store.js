import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/cardmovieSlice";

export const store = configureStore({
  reducer: {
    movie: moviesSlice,
  },
});
