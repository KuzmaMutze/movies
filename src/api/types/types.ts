export type MovieFeaturedType = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type ResponsePageMoviesFeaturedType = {
    page: number
    results: Array<MovieFeaturedType>
    total_pages: number
    total_results: number
}


// ResponseMovieId
type itemGenres = {
    id: number
    name: string
}
type itemProduction_companies = {
    id: number
    logo_path: string
    name: string
    origin_country: string 
}
type itemProduction_countries = {
    iso_3166_1: string
    name: string
}
type itemSpoken_languages = {
    english_name: string
    iso_639_1: string
    name: string
}
export type ResponseMovieId = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: null
    budget: number
    genres: Array<itemGenres>
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<itemProduction_companies>
    production_countries: Array<itemProduction_countries>
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Array<itemSpoken_languages>
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

// Multi request

export type TVType = {
    backdrop_path: string
    genre_ids: Array<number>,
    id: number,
    media_type: string,
    name: string,
    origin_country: Array<string>,
    original_language: string,
    original_name: string,
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export type PersoneType = {
    adult: boolean
    gender: number
    id: number
    known_for: Array<MovieFeaturedType>,
    known_for_department: string
    media_type: string
    name: string
    popularity: number
    profile_path: null
}

export type MultiResponsePage = {
    page: number
    results: Array<MovieFeaturedType | TVType | PersoneType>
    total_pages: number
    total_results: number
}