import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { TimeWindow } from '../interfaces/trending/TimeWindow'

export interface ITrendingSlice {
  trendingMovieTimeWindow: TimeWindow
  trendingPersonTimeWindow: TimeWindow
  trendingTVTimeWindow: TimeWindow
}

const initialState: ITrendingSlice = {
  trendingMovieTimeWindow: TimeWindow.day,
  trendingPersonTimeWindow: TimeWindow.day,
  trendingTVTimeWindow: TimeWindow.day
}

export const trendingSlice = createSlice({
  name: 'trendingSlice',
  initialState,
  reducers: {
    saveTrendingMovieTimeWindow: (state, action: PayloadAction<TimeWindow>) => {
      state.trendingMovieTimeWindow = action.payload
    },
    saveTrendingPersonTimeWindow: (state, action: PayloadAction<TimeWindow>) => {
      state.trendingPersonTimeWindow = action.payload
    },
    saveTrendingTVTimeWindow: (state, action: PayloadAction<TimeWindow>) => {
      state.trendingTVTimeWindow = action.payload
    }
  }
})

export const { saveTrendingMovieTimeWindow, saveTrendingPersonTimeWindow, saveTrendingTVTimeWindow } =
  trendingSlice.actions

export default trendingSlice.reducer
