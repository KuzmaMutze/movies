import { AppStateType } from './../store';

export let getMoviesSelector = (state: AppStateType) => {
    return state.contant.moviesPage
}

export let getIsFetching = (state: AppStateType) => {
    return state.contant.isFetching
}