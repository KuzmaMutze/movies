import { BaseThunkType, InferActionTypes } from '../store';
import { API } from '../../api/api';
import { MultiResponsePage, ResponsePageMoviesFeaturedType } from '../../api/types/types';

let initialState = {
    multiPage: [] as Array<MultiResponsePage>,
    moviesPage: [] as Array<ResponsePageMoviesFeaturedType>
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
    } else if (action.type === "SET_MOVIES_PAGE") {
        return{
            ...state,
            moviesPage: [
                action.page
            ]
        }
    } 
    
    return state;
}

export let actions = {
    setMultPageAC: (page: MultiResponsePage) => ({type: "SET_MULTI_PAGE", page} as const),
    setMultPagesAC: (page: MultiResponsePage) => ({type: "SET_MULTI_PAGES", page} as const),
    setMoviesAC: (page: ResponsePageMoviesFeaturedType) => ({type: "SET_MOVIES_PAGE", page} as const),
}

// thunk
export let setMultPage = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMulti(search, page)
    dispatch(actions.setMultPageAC(data))
}
export let setMultPages = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMulti(search, page)
    dispatch(actions.setMultPagesAC(data))
}

export let setMoviesPage = (search: string, page?: number): ThunkType => async (dispatch) => {
    let data = await API.getMovies(search,page)
    dispatch(actions.setMoviesAC(data))
}
// export let setMoviesPage = (search: string, page?: number): ThunkType => async (dispatch) => {
//     let data = await API.getMovies(search,page)
//     dispatch(actions.setMoviesAC(data))
// }


export default contantReducer;