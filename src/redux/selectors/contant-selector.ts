import { AppStateType } from './../store';

export let getMultiPageSelector = (state: AppStateType) => {
    return state.contant.multiPage
}
export let getMoviesSelector = (state: AppStateType) => {
    return state.contant.moviesPage
}
export let getTvSelector = (state: AppStateType) => {
    return state.contant.tvPage
}
export let getPeopleSelector = (state: AppStateType) => {
    return state.contant.peoplePage
}
