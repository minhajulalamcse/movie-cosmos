import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IMovieSlice {
  categoryName: string
}

const initialState: IMovieSlice = {
  categoryName: 'popular'
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    saveCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload
    }
  }
})

export const { saveCategoryName } = movieSlice.actions

export default movieSlice.reducer
