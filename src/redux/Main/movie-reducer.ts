import { BaseThunkType, InferActionTypes } from '../store';
import { Dispatch } from 'redux';
import { API } from '../../api/api';
import { ResponseMovieId } from '../../api/types/types';

let initialState = {
    movie: {} as ResponseMovieId,
    isFetching: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>


const movieReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_MOVIE") {
        return {
            ...state,
            movie: action.movie
        }
    } else if (action.type === "SET_IS_FETCHING") {
        return {
            ...state,
            isFetching: action.bool
        }
    }
    return state;
}

export let actions = {
    setMovieIdAC: (movie: ResponseMovieId) => ({type: "SET_MOVIE", movie} as const),
    setIsFetching: (bool: boolean) => ({type: "SET_IS_FETCHING", bool} as const),
}

// thunk
export let getMovieId = (page: number): ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetching(true))
    let data = await API.getMovieId(page)
    dispatch(actions.setMovieIdAC(data))
    dispatch(actions.setIsFetching(false))
}

export default movieReducer;