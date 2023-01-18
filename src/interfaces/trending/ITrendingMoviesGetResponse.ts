import { IMovieDetailsGetResponse } from '../movies/IMovieDetailsGetResponse'

export interface ITrendingMoviesGetResponse {
  page: number
  results: IMovieDetailsGetResponse[]
  total_pages: number
  total_results: number
}
