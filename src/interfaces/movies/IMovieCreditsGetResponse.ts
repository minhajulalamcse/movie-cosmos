import { IMovieCreditsCast } from './IMovieCreditsCast'
import { IMovieCreditsCrew } from './IMovieCreditsCrew'

export interface IMovieCreditsGetResponse {
  id: number
  cast: IMovieCreditsCast[]
  crew: IMovieCreditsCrew[]
}
