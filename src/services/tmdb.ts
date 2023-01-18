import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITrendingGetResponse } from '../interfaces/trending/ITrendingGetResponse'
import { ITrendingParams } from '../interfaces/trending/ITrendingParams'

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY as string

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'
  }),
  endpoints: (builder) => ({
    getTrending: builder.query<ITrendingGetResponse, ITrendingParams>({
      query: ({ mediaType, timeWindow }) => {
        return `trending/${mediaType}/${timeWindow}?api_key=${TMDB_API_KEY}`
      }
    })
  })
})

export const { useGetTrendingQuery } = tmdbApi
