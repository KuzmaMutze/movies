import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedMovies, getFeaturedMoviesInit } from "../../../redux/Main/featured-reducer";
import { getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { getFeaturedMoviesSelector, getIsFetching } from "../../../redux/selectors/featured-selectors";
import { Card } from "./Card/Card";
import "./Featured.scss"

type PropsType = {}


export const Featured: React.FC<PropsType> = (props) => {


    let dispatch = useDispatch()
    let movies = useSelector(getFeaturedMoviesSelector)
    let isFetching = useSelector(getIsFetching)
    let favouriteIds = useSelector(getFavouriteMovieId)
    
    let initialMoviesLoading = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    useEffect(() => {
        document.title = "Featured"
        dispatch(getFeaturedMoviesInit(1))
    }, [])

    let getPage = () => {
        let page = movies.length + 1  
        dispatch(getFeaturedMovies(page))
    }

    return (
        <div className="featured">
            <h2 className="featured__title">Featured movies</h2>
            <div className="featured__movies">
                
                {!!movies.length ? movies.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el}/>) : <div style={{display: "flex", flexWrap: "wrap"}}>
                    {initialMoviesLoading.map(el => <div key={el} className="movie"></div>)}
                </div>} 
                {!!movies.length && <button disabled={isFetching} onClick={() => getPage()} className="movie more" >
                    <span>Load More</span>
                </button>}
            </div>
        </div>
  )
};