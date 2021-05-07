import { AppStateType } from './../store';

export let getFeaturedMoviesSelector = (state: AppStateType) => {
    return state.featured.featuredPages
}
export let getIsFetching = (state: AppStateType) => {
    return state.featured.isFetching
}