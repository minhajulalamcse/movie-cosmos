import { IMovieBackdrop } from './IMovieBackdrop'
import { IMoviePoster } from './IMoviePoster'

export interface IMovieImagesGetResponse {
  id: number
  backdrops: IMovieBackdrop[]
  posters: IMoviePoster[]
}
