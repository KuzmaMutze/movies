import { BaseThunkType, InferActionTypes } from '../store';
import { API } from '../../api/api';
import { MovieFeaturedType } from '../../api/types/types';

let initialState = {
    favoritesMovie: [] as Array<number>,
    movies: [
        [] as Array<MovieFeaturedType>
    ] 
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>


const favoritesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_MOVIE_ID") {
        if (!state.favoritesMovie.length) {
            return {
                ...state,
                favoritesMovie: [...state.favoritesMovie, action.id]
            }
        } else if (state.favoritesMovie.some(id => id !== action.id)) {
            return {
                ...state,
                favoritesMovie: [...state.favoritesMovie, action.id]
            }
        }
    } else if (action.type === "SET_FAVORITE_MOVIES"){
        return{
            ...state,
            movies: [
                ...state.movies,
                [{...action.movie}]
            ]
        }
    }
    return state;
}

export let actions = {
    setIdMovieFavoriteAC: (id: number) => ({type: "SET_MOVIE_ID", id} as const),
    setMovieFavoriteAC: (movie: MovieFeaturedType) => ({type: "SET_FAVORITE_MOVIES", movie} as const),
}

// thunk
export let setIdMovieIdFavorite = (id: number): ThunkType => async (dispatch) => {
    dispatch(actions.setIdMovieFavoriteAC(id))
}
export let setMovieIdFavorite = (id: number): ThunkType => async (dispatch) => {
    let data = await API.getMovieId(id)
    dispatch(actions.setMovieFavoriteAC(data))
}

export default favoritesReducer;