import { BaseThunkType, InferActionTypes } from './store';
import { Dispatch } from 'redux';

let initialState = {
    initialzed: false,
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_INITIALZED") {
        return {
            ...state,
            initialzed: true
        }
    }
    return state;
}

export let actions = {
    setInitialzedSuccess: () => ({type: "SET_INITIALZED"} as const) 
}

// thunk
export let initializeApp = () => (dispatch: any) => {

}

export default appReducer;