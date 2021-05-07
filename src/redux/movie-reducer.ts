import { BaseThunkType, InferActionTypes } from './store';
import { Dispatch } from 'redux';
import { API } from '../api/api';
import { ResponseMovieId, ResponsePageMoviesFeaturedType } from '../api/types/types';

let initialState = {
    movie: null as ResponseMovieId | null
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>


const movieReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_MOVIE") {
        return {
            ...state,
            movie: action.movie
        }
    }
    return state;
}

export let actions = {
    setMovieIdAC: (movie: ResponseMovieId) => ({type: "SET_MOVIE", movie} as const),
}

// thunk
export let getMovieId = (page: number): ThunkType => async (dispatch) => {
    let data = await API.getMovieId(page)
    dispatch(actions.setMovieIdAC(data))
}

export default movieReducer;