import { BaseThunkType, InferActionTypes } from './store';
import { Dispatch } from 'redux';
import { API } from '../api/api';
import { MovieFeaturedType } from '../api/types/types';

let initialState = {
    featuredPages: [] as Array<MovieFeaturedType>,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>


const featuredReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_FEATURED_MOVIES") {
        return {
            ...state,
            featuredPages: [
                ...state.featuredPages,
                action.payload.results
            ]
        }
    }
    return state;
}

export let actions = {
    setFeaturedMovies: (payload: any) => ({type: "SET_FEATURED_MOVIES", payload} as const) 
}

// thunk
export let getFeaturedMovies = (): ThunkType => async (dispatch) => {
    let data = await API.featured()
    dispatch(actions.setFeaturedMovies(data))    
}

export default featuredReducer;