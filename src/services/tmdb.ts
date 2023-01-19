import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGenreMovieListGetResponse } from '../interfaces/genres/IGenreMovieListGetResponse'
import { IMovieCreditsGetResponse } from '../interfaces/movies/IMovieCreditsGetResponse'
import { IMovieDetailsGetResponse } from '../interfaces/movies/IMovieDetailsGetResponse'
import { IMovieGetRecommendationsGetResponse } from '../interfaces/movies/IMovieGetRecommendationsGetResponse'
import { IMovieImagesGetResponse } from '../interfaces/movies/IMovieImagesGetResonse'
import { IMovieNowPlayingGetResponse } from '../interfaces/movies/IMovieNowPlayingGetResponse'
import { IMoviePopularGetResponse } from '../interfaces/movies/IMoviePopularGetResponse'
import { IMovieTopRatedGetResponse } from '../interfaces/movies/IMovieTopRatedGetResponse'
import { IMovieUpcomingGetResponse } from '../interfaces/movies/IMovieUpcomingGetResponse'
import { IMovieVideosGetResponse } from '../interfaces/movies/IMovieVideosGetResponse'
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
    }),
    getMovieRecommendations: builder.query<IMovieGetRecommendationsGetResponse, number>({
      query: (movieId) => {
        return `movie/${movieId}/recommendations?api_key=${TMDB_API_KEY}`
      }
    }),
    getMovieVideos: builder.query<IMovieVideosGetResponse, number>({
      query: (movieId) => {
        return `movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
      }
    }),
    getMovieImages: builder.query<IMovieImagesGetResponse, number>({
      query: (movieId) => {
        return `movie/${movieId}/images?api_key=${TMDB_API_KEY}`
      }
    }),
    getMoviesByCategory: builder.query<IMovieNowPlayingGetResponse, string>({
      query: (categoryName) => {
        return `movie/${categoryName}?api_key=${TMDB_API_KEY}`
      }
    }),
    getNowPlayingMovies: builder.query<IMovieNowPlayingGetResponse, null>({
      query: () => {
        return `movie/now_playing?api_key=${TMDB_API_KEY}`
      }
    }),
    getPopularMovies: builder.query<IMoviePopularGetResponse, null>({
      query: () => {
        return `movie/popular?api_key=${TMDB_API_KEY}`
      }
    }),
    getTopRatedMovies: builder.query<IMovieTopRatedGetResponse, null>({
      query: () => {
        return `movie/top_rated?api_key=${TMDB_API_KEY}`
      }
    }),
    getUpcomingMovies: builder.query<IMovieUpcomingGetResponse, null>({
      query: () => {
        return `movie/upcoming?api_key=${TMDB_API_KEY}`
      }
    }),
    getGenres: builder.query<IGenreMovieListGetResponse, null>({
      query: () => {
        return `genre/movie/list?api_key=${TMDB_API_KEY}`
      }
    })
  })
})
export const {
  useGetTrendingMoviesQuery,
  useGetTrendingTVShowsQuery,
  useGetTrendingPeopleQuery,
  useGetMovieDetailsQuery,
  useGetCreditsOfMovieQuery,
  useGetMovieRecommendationsQuery,
  useGetMovieVideosQuery,
  useGetMovieImagesQuery,
  useGetMoviesByCategoryQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetGenresQuery
} = tmdbApi
