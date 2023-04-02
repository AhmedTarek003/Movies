import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "moviesSlice/fetchMovies",
  async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US"
    );
    const data = await res.json();
    return data;
  }
);

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { extraReducers } = moviesSlice.actions;
export default moviesSlice.reducer;
