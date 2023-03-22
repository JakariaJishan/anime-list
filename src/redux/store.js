import { configureStore } from '@reduxjs/toolkit';
import animeSlice from './Anime-list/animeSlice';
import episodeSlice from './Anime-list/episodeSlice';

export default configureStore({
  reducer: {
    animeList: animeSlice,
    episodeList: episodeSlice,
  },
});
