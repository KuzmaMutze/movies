import { BaseThunkType, InferActionTypes } from '../store';
import { API } from '../../api/api';
import { MultiResponsePage, ResponsePageMoviesFeaturedType } from '../../api/types/types';

let initialState = {
    multiPage: [] as Array<MultiResponsePage>,
    moviesPage: [] as Array<ResponsePageMoviesFeaturedType>,
    tvPage: [] as Array<MultiResponsePage>,
    peoplePage: [] as Array<MultiResponsePage>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>


const contantReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_MULTI_PAGE") {
        return{
            ...state,
            multiPage: [
                action.page
            ]
        }
    }else if (action.type === "SET_MULTI_PAGES") {
        return{
            ...state,
            multiPage: [
                ...state.multiPage,
                action.page
            ]
        }
    } else if (action.type === "SET_EMPTY_MULTI_PAGES") {
        return{
            ...state,
            multiPage: [],
            moviesPage: [],
            peoplePage: [],
            tvPage: []
        }
    } 
    else if (action.type === "SET_MOVIES_PAGE") {
        return{
            ...state,
            moviesPage: [
                action.page
            ]
        }
    } else if (action.type === "SET_MOVIES_PAGES") {
        return{
            ...state,
            moviesPage: [
                ...state.moviesPage,
                action.page
            ]
        }
    } else if (action.type === "SET_TV_PAGE") {
        return{
            ...state,
            tvPage: [
                action.page
            ]
        }
    } else if (action.type === "SET_TV_PAGES") {
        return{
            ...state,
            tvPage: [
                ...state.tvPage,
                action.page
            ]
        }
    } else if (action.type === "SET_PEOPLE_PAGE") {
        return{
            ...state,
            peoplePage: [
                action.page
            ]
        }
    } else if (action.type === "SET_PEOPLE_PAGES") {
        return{
            ...state,
            peoplePage: [
                ...state.peoplePage,
                action.page
            ]
        }
    } 
    
    return state;
}

export let actions = {
    //mult
    setMultPageAC: (page: MultiResponsePage) => ({type: "SET_MULTI_PAGE", page} as const),
    setMultPagesAC: (page: MultiResponsePage) => ({type: "SET_MULTI_PAGES", page} as const),
    //movies
    setMoviesAC: (page: ResponsePageMoviesFeaturedType) => ({type: "SET_MOVIES_PAGE", page} as const),
    setMoviesPagesAC: (page: ResponsePageMoviesFeaturedType) => ({type: "SET_MOVIES_PAGES", page} as const),
    //tv
    setTvAC: (page: MultiResponsePage) => ({type: "SET_TV_PAGE", page} as const),
    setTvPagesAC: (page: MultiResponsePage) => ({type: "SET_TV_PAGES", page} as const),
    //people
    setPeopleAC: (page: MultiResponsePage) => ({type: "SET_PEOPLE_PAGE", page} as const),
    setPeoplePagesAC: (page: MultiResponsePage) => ({type: "SET_PEOPLE_PAGES", page} as const),
    //no simbol in search
    setEmptyMultPageAC: () => ({type: "SET_EMPTY_MULTI_PAGES"} as const),
}

// thunks
// multi
export let setMultPage = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMulti(search, page)
    dispatch(actions.setMultPageAC(data))
}
export let setMultPages = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMulti(search, page)
    dispatch(actions.setMultPagesAC(data))
}

export let setEmptyMultPage = (): ThunkType => async (dispatch) => {
    dispatch(actions.setEmptyMultPageAC())
}

// movie
export let setMoviesPage = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMovies(search,page)
    dispatch(actions.setMoviesAC(data))
}
export let setMoviesPages = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMovies(search,page)
    dispatch(actions.setMoviesPagesAC(data))
}
// tv
export let setTvPage = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getTv(search,page)
    dispatch(actions.setTvAC(data))
}
export let setTvPages = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getTv(search,page)
    dispatch(actions.setTvPagesAC(data))
}
// people
export let setPeoplePage = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getPeople(search,page)
    dispatch(actions.setPeopleAC(data))
}
export let setPeoplePages = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getPeople(search,page)
    dispatch(actions.setPeoplePagesAC(data))
}


export default contantReducer;