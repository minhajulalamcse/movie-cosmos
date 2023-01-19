import { IMovieDetailsGetResponse } from './IMovieDetailsGetResponse'

export interface IMoviePopularGetResponse {
  page: number
  results: IMovieDetailsGetResponse[]
  total_results: number
  total_pages: number
}
