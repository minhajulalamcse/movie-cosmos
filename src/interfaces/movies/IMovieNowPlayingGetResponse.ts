import { IMovieDate } from './IMovieDate'
import { IMovieDetailsGetResponse } from './IMovieDetailsGetResponse'

export interface IMovieNowPlayingGetResponse {
  page: number
  results: IMovieDetailsGetResponse[]
  dates: IMovieDate
  total_pages: number
  total_results: number
}
