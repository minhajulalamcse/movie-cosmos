import { MediaType } from './MediaType'
import { TimeWindow } from './TimeWindow'

export interface ITrendingParams {
  mediaType: MediaType.all | MediaType.movie | MediaType.person | MediaType.tv
  timeWindow: TimeWindow.day | TimeWindow.week
}
