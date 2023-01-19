import { IMovieDetailsGetResponse } from './IMovieDetailsGetResponse'

export interface IMovieTopRatedGetResponse {
  page: number
  results: IMovieDetailsGetResponse[]
  total_results: number
  total_pages: number
}
