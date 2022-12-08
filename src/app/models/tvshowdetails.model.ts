export interface Tvshowdetails {
  adult: boolean
  backdrop_path: string
  created_by: CreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  genres: any[]
  homepage: string
  id: number
  in_production: boolean
  languages: any[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: any
  networks: any[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: any[]
  production_countries: any[]
  seasons: Season[]
  spoken_languages: any[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface CreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: any
}

export interface LastEpisodeToAir {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: any
  vote_average: number
  vote_count: number
}

export interface Season {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: any
  season_number: number
}
