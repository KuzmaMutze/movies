import { BaseThunkType, InferActionTypes } from '../store';
import { API } from '../../api/api';
import { MultiResponsePage, ResponsePageMoviesFeaturedType } from '../../api/types/types';

let initialState = {
    moviesPage: [] as Array<ResponsePageMoviesFeaturedType>,
    isFetching: false as boolean
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>


const contantReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_EMPTY_MULTI_PAGES") {
        return{
            ...state,
            moviesPage: [],
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
    }else if (action.type === "SET_FETCHING") {
        return{
            ...state,
            isFetching: action.bool
        }
    }
    return state;
}

export let actions = {
    setMoviesAC: (page: ResponsePageMoviesFeaturedType) => ({type: "SET_MOVIES_PAGE", page} as const),
    setMoviesPagesAC: (page: ResponsePageMoviesFeaturedType) => ({type: "SET_MOVIES_PAGES", page} as const),
    //no simbol in search
    setEmptyMultPageAC: () => ({type: "SET_EMPTY_MULTI_PAGES"} as const),
    setIsFetching: (bool: boolean) => ({type: "SET_FETCHING", bool} as const),
}

// thunks
export let setEmptyMultPage = (): ThunkType => async (dispatch) => {
    dispatch(actions.setEmptyMultPageAC())
}

// movie
export let setMoviesPage = (search: string, page?: number): ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetching(true))
    let data = await API.getMovies(search,page)
    dispatch(actions.setMoviesAC(data))
    dispatch(actions.setIsFetching(false))
}
export let setMoviesPages = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMovies(search,page)
    dispatch(actions.setMoviesPagesAC(data))
}


export default contantReducer;