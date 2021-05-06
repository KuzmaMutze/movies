import { AppStateType } from './../store';

export let getFeaturedMoviesSelector = (state: AppStateType) => {
    return state.featured.featuredPages
}