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

console.log(initialState.animeList);

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers : (builder)=>{
    builder.addCase(fetchAnime.fulfilled, (state, action) => {
        console.log(action.payload);
        state.animeList.push(action.payload)
    })
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = animeSlice.actions;

export default animeSlice.reducer;
