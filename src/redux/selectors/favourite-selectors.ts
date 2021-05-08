import { AppStateType } from './../store';

export let getFavouriteMovieId = (state: AppStateType) => {
    return state.favorites.favoritesMovie
}
export let getFavouriteMovie = (state: AppStateType) => {
    return state.favorites.movies
}