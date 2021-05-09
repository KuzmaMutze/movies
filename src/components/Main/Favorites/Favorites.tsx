import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeMovie, setMovieIdFavorite } from "../../../redux/Main/favorites-reducer";
import { getFavouriteMovie, getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { Card } from "../Featured/Card/Card";
import "./../Featured/Featured.scss"

type PropsType = {}


export const Favorites: React.FC<PropsType> = (props) => {


    let dispatch = useDispatch()
    let favouriteIds = useSelector(getFavouriteMovieId)
    let favouriteMovies = useSelector(getFavouriteMovie)

    useEffect(() => {
        favouriteIds.forEach(id => dispatch(setMovieIdFavorite(id)))
        return () => {
            dispatch(removeMovie())
        }
    }, [])

    return (
        <div className="featured">
            <h2 className="featured__title">Favorites</h2>
            <div className="featured__movies">
                {favouriteMovies && favouriteMovies.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el}/>)} 
            </div>
        </div>
  )
};
