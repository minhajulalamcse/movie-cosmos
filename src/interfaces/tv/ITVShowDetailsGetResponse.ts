import { IGenre } from '../genres/IGenre'
import { ICreatedBy } from '../ICreatedBy'
import { ILastEpisodeToAir } from '../ILastEpisodeToAir'
import { INetwork } from '../INetwork'
import { IProductionCompnay } from '../IProductionCompany'
import { IProductionCountry } from '../IProductionCountry'
import { ISeason } from '../ISeason'
import { ISpokenLanguage } from '../ISpokenLanguage'

export interface ITVShowDetailsGetResponse {
  backdrop_path: string | null
  created_by: ICreatedBy
  episode_run_time: number[]
  first_air_date: string
  genres: IGenre[]
  homepage: string
  id: number
  in_production: boolean
  language: string[]
  last_air_date: string
  last_episode_to_air: ILastEpisodeToAir
  name: string
  next_episode_to_air: null
  networks: INetwork[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: IProductionCompnay[]
  production_countries: IProductionCountry[]
  seasons: ISeason[]
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}
