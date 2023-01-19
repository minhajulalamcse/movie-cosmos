import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IMovieSlice {
  categoryName: string | null
  genreName: string | null
}

const initialState: IMovieSlice = {
  categoryName: null,
  genreName: null
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    saveCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload
      state.genreName = null
    },
    saveGenreName: (state, action: PayloadAction<string>) => {
      state.categoryName = null
      let genres: string = ''
      if (state.genreName !== null) {
        genres = state.genreName
        genres += `,${action.payload}`
      }
      state.genreName = genres
    }
  }
})

export const { saveCategoryName, saveGenreName } = movieSlice.actions

export default movieSlice.reducer
