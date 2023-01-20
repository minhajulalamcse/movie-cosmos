import { IPersonTVCast } from './IPersonTVCast'
import { IPersonTVCrew } from './IPersonTVCrew'

export interface IPersonTVCreditsGetResponse {
  id: number
  cast: IPersonTVCast[]
  crew: IPersonTVCrew[]
}
