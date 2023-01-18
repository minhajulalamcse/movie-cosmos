import { ITrendingResultObject } from './ITrendingResultObject'

export interface ITrendingGetResponse {
  page: number
  results: ITrendingResultObject[]
  total_pages: number
  total_results: number
}
