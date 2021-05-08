import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedMovies, getFeaturedMoviesInit } from "../../../redux/Main/featured-reducer";
import { getFeaturedMoviesSelector, getIsFetching } from "../../../redux/selectors/featured-selectors";
import { Card } from "./Card/Card";
import "./Featured.scss"

type PropsType = {}


export const Featured: React.FC<PropsType> = (props) => {


    let dispatch = useDispatch()
    let movies = useSelector(getFeaturedMoviesSelector)
    let isFetching = useSelector(getIsFetching)

    
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
            <div  className="featured__movies">
                {movies.map((el : any) => <Card el={el}/>)} 
                <button disabled={isFetching} onClick={() => getPage()} className="movie more" >
                    <span>Load More</span>
                </button>
            </div>
        </div>
  )
};