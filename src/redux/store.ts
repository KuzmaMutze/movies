
import {applyMiddleware, combineReducers, createStore, compose, Action} from "redux";
import aapReducer from "./app-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import featuredReducer from "./Main/featured-reducer";
import movieReducer from "./Main/movie-reducer";
import favoritesReducer from "./Main/favorites-reducer";
import contantReducer from "./Main/contant-reducer";

let rootReducers = combineReducers({
    app: aapReducer,
    featured: featuredReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
    contant: contantReducer
});

type RootReducerType = typeof rootReducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

// types
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;


export default store;