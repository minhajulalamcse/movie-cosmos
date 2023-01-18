import { IPersonDetailsGetResponse } from '../people/IPersonDetailsGetResponse'

export interface ITrendingPeopleGetResponse {
  page: number
  results: IPersonDetailsGetResponse[]
  total_pages: number
  total_results: number
}
