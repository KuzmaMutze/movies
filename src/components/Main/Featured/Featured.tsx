import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getFeaturedMovies } from "../../../redux/featured-reducer";
import "./Featured.scss"

type PropsType = {}
export const Featured: React.FC<PropsType> = (props) => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFeaturedMovies())
    }, [])

    return (
        <div className="featured">
            <h2 className="featured__title">Featured movies</h2>
            <div className="featured__movies">
                <div className="movie">

                </div>
            </div>
        </div>
  )
};

