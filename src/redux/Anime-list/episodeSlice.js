import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  episodeList: [],
  loading: false,
};

export const fetchEpisode = createAsyncThunk("anime/fetchEpisode", async (id) => {
  const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/episodes`);
  return res.data;
});

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisode.fulfilled, (state, action) => {
      state.episodeList = action.payload;
    });

    builder.addCase(fetchEpisode.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { increment, decrement, incrementByAmount } = episodeSlice.actions;

export default episodeSlice.reducer;
