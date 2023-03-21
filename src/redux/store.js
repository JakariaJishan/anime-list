import { configureStore } from '@reduxjs/toolkit'
import animeSlice from './Anime-list/animeSlice'

export default configureStore({
  reducer: animeSlice,
})