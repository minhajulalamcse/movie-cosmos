import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IMovieSlice {
  categoryName: string | undefined
  genreName: string | undefined
}

const initialState: IMovieSlice = {
  categoryName: undefined,
  genreName: undefined
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    saveCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload
      state.genreName = undefined
    },
    saveGenreName: (state, action: PayloadAction<string>) => {
      state.categoryName = undefined
      let genres: string = ''
      if (state.genreName !== undefined) {
        genres = state.genreName
        genres += ','
      }
      genres += `${action.payload}`
      state.genreName = genres
    }
  }
})

export const { saveCategoryName, saveGenreName } = movieSlice.actions

export default movieSlice.reducer
