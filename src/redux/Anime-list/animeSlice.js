import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeList: [],
  loading: false,
};

export const fetchAnime = createAsyncThunk("anime/fetchAnime", async () => {
  const res = await fetch("https://api.jikan.moe/v4/anime");
  const data = await res.json()
  return data;
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

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = animeSlice.actions;

export default animeSlice.reducer;
