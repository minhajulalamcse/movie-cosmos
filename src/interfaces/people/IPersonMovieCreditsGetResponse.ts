import { IPersonCast } from './IPersonMovieCast'
import { IPersonCrew } from './IPersonMovieCrew'

export interface IPersonMovieCreditsGetResponse {
  id: number
  cast: IPersonCast[]
  crew: IPersonCrew[]
}
