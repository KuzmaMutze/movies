import { AppStateType } from './../store';

export let getMovieSelector = (state: AppStateType) => {
    return state.movie.movie
}
export let getIsFetching = (state: AppStateType) => {
    return state.movie.isFetching
}
