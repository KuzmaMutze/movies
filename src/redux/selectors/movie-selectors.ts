import { AppStateType } from './../store';

export let getMovieSelector = (state: AppStateType) => {
    return state.movie.movie
}
