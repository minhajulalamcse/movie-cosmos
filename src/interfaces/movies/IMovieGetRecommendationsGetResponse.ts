import { IMovieDetailsGetResponse } from './IMovieDetailsGetResponse'

export interface IMovieGetRecommendationsGetResponse {
  page: number
  results: IMovieDetailsGetResponse[]
  total_pages: number
  total_results: number
}
