export interface IPersonCrew {
  id: number
  department: string
  original_language: string
  original_title: string
  job: string
  overview: string
  vote_count: number
  video: boolean
  poster_path: string | null
  backdrop_path: string | null
  title: string
  popularity: number
  genre_ids: number[]
  vote_average: number
  adult: boolean
  release_date: string
  credit_id: string
}
