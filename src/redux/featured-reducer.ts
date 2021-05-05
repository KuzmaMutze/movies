import { BaseThunkType, InferActionTypes } from './store';
import { Dispatch } from 'redux';
import { API } from '../api/api';

let initialState = {
    featuredPages: [],
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>


const featuredReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_FEATURED_MOVIES") {
        return {
            ...state,
            // featuredPages: [...state.featuredPages, action.payload]
        }
    }
    return state;
}

export let actions = {
    setFeaturedMovies: (payload: any) => ({type: "SET_FEATURED_MOVIES", payload} as const) 
}

// thunk
export let getFeaturedMovies = () => async (dispatch: DispatchType) => {
    let data = await API.featured()
    console.log(data);
    
    actions.setFeaturedMovies(data)
    console.log(data);
    
}

export default featuredReducer;