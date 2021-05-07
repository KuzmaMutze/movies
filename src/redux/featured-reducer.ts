import { BaseThunkType, InferActionTypes } from './store';
import { Dispatch } from 'redux';
import { API } from '../api/api';
import { ResponsePageMoviesFeaturedType } from '../api/types/types';

let initialState = {
    featuredPages: [] as Array<ResponsePageMoviesFeaturedType>,
    isFetching: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>


const featuredReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_FEATURED_MOVIES") {
        return {
            ...state,
            featuredPages: [
                ...state.featuredPages,
                action.payload
            ]
        }
    } else if (action.type === "SET_FEATURED_MOVIES_INIT") {
        return {
            ...state,
            featuredPages: [
                action.payload
            ]
        }
    }else if (action.type === "SET_IS_FETCHING") {
        return {
            ...state,
            isFetching: action.boolean
        }
    }
    return state;
}

export let actions = {
    setFeaturedMoviesInitAC: (payload: ResponsePageMoviesFeaturedType) => ({type: "SET_FEATURED_MOVIES_INIT", payload} as const),
    setFeaturedMoviesAC: (payload: ResponsePageMoviesFeaturedType) => ({type: "SET_FEATURED_MOVIES", payload} as const),
    setIsFetchingAC: (boolean: boolean) => ({type: "SET_IS_FETCHING", boolean} as const),
}

// thunk
export let getFeaturedMovies = (page: number): ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetchingAC(true))
    let data = await API.featuredPage(page)
    dispatch(actions.setFeaturedMoviesAC(data))  
    dispatch(actions.setIsFetchingAC(false))  
}

export let getFeaturedMoviesInit = (page: number) : ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetchingAC(true))
    let data = await API.featuredPage(page)
    dispatch(actions.setFeaturedMoviesInitAC(data))
    dispatch(actions.setIsFetchingAC(false))
}

export default featuredReducer;