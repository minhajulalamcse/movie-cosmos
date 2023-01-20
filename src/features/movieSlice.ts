import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IMovieSlice {
  categoryName: string | undefined
  genreName: string | undefined
  genres: number[] | undefined
}

const initialState: IMovieSlice = {
  categoryName: undefined,
  genreName: undefined,
  genres: undefined
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    saveCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload
      state.genreName = undefined
    },
    saveGenreId: (state, action: PayloadAction<number>) => {
      state.categoryName = undefined

      const genreIds: number[] = [action.payload]
      if (state.genres !== undefined) {
        state.genres = [...state.genres, ...genreIds]
      } else {
        state.genres = [...genreIds]
      }
      console.log('save', state.genres)
      state.genreName = state.genres?.join(',')
    },
    removeGenreId: (state, action: PayloadAction<number>) => {
      if (state.genres === undefined) {
        return state
      }
      const genresCopy: number[] = [...state?.genres]
      const index = genresCopy.indexOf(action.payload)
      genresCopy.splice(index, 1)

      state.genres = genresCopy
      state.genreName = genresCopy?.join(',')
    }
  }
})

export const { saveCategoryName, saveGenreId, removeGenreId } = movieSlice.actions

export default movieSlice.reducer
