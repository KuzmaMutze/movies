import { AppStateType } from './../store';

export let getMultiPageSelector = (state: AppStateType) => {
    return state.contant.multiPage
}
export let getMoviesSelector = (state: AppStateType) => {
    return state.contant.moviesPage
}
