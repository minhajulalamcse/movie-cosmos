import { MediaType } from '../../types/MediaType'
import { TimeWindow } from '../../types/TimeWindow'

export interface ITrendingParams {
  mediaType: MediaType.all | MediaType.movie | MediaType.person | MediaType.tv
  timeWindow: TimeWindow.day | TimeWindow.week
}
