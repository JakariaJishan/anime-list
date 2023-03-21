import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  animeList: [],
  loading: false,
};

export const fetchAnime = createAsyncThunk("anime/fetchAnime", async () => {
  const res = await axios.get("https://api.jikan.moe/v4/anime");
  return res.data;
});

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnime.fulfilled, (state, action) => {
      state.animeList = action.payload;
    });

    builder.addCase(fetchAnime.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { increment, decrement, incrementByAmount } = animeSlice.actions;

export default animeSlice.reducer;
