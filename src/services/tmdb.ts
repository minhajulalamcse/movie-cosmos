import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovieCreditsGetResponse } from '../interfaces/movies/IMovieCreditsGetResponse'
import { IMovieDetailsGetResponse } from '../interfaces/movies/IMovieDetailsGetResponse'
import { ITrendingMoviesGetResponse } from '../interfaces/trending/ITrendingMoviesGetResponse'
import { ITrendingParams } from '../interfaces/trending/ITrendingParams'
import { ITrendingPeopleGetResponse } from '../interfaces/trending/ITrendingPeopleGetResponse'
import { ITrendingTVShowsGetResponse } from '../interfaces/trending/ITrendingTVShowsGetResponse'

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY as string

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<ITrendingMoviesGetResponse, ITrendingParams>({
      query: ({ mediaType, timeWindow }) => {
        return `trending/${mediaType}/${timeWindow}?api_key=${TMDB_API_KEY}`
      }
    }),
    getTrendingTVShows: builder.query<ITrendingTVShowsGetResponse, ITrendingParams>({
      query: ({ mediaType, timeWindow }) => {
        return `trending/${mediaType}/${timeWindow}?api_key=${TMDB_API_KEY}`
      }
    }),
    getTrendingPeople: builder.query<ITrendingPeopleGetResponse, ITrendingParams>({
      query: ({ mediaType, timeWindow }) => {
        return `trending/${mediaType}/${timeWindow}?api_key=${TMDB_API_KEY}`
      }
    }),
    getMovieDetails: builder.query<IMovieDetailsGetResponse, number>({
      query: (movieId) => {
        return `movie/${movieId}?api_key=${TMDB_API_KEY}`
      }
    }),
    getCreditsOfMovie: builder.query<IMovieCreditsGetResponse, number>({
      query: (movieId) => {
        return `movie/${movieId}/credits?api_key=${TMDB_API_KEY}`
      }
    })
  })
})
export const {
  useGetTrendingMoviesQuery,
  useGetTrendingTVShowsQuery,
  useGetTrendingPeopleQuery,
  useGetMovieDetailsQuery,
  useGetCreditsOfMovieQuery
} = tmdbApi
