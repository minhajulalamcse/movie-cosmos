import { IMovieDetailsGetResponse } from './IMovieDetailsGetResponse'

export interface IDiscoverMovieGetResponse {
  page: number
  results: IMovieDetailsGetResponse[]
  total_results: number
  total_pages: number
}
