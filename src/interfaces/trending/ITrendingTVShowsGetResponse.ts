import { ITVShowDetailsGetResponse } from '../tv/ITVShowDetailsGetResponse'

export interface ITrendingTVShowsGetResponse {
  page: number
  results: ITVShowDetailsGetResponse[]
  total_pages: number
  total_results: number
}
