import { IGenre } from '../genres/IGenre'
import { IProductionCompnay } from '../IProductionCompany'
import { IProductionCountry } from '../IProductionCountry'
import { ISpokenLanguage } from '../ISpokenLanguage'

export interface IMovieDetailsGetResponse {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null | object
  budget: number
  genres: IGenre[]
  homepage: string | null
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: IProductionCompnay[]
  production_countries: IProductionCountry[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
