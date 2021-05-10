import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeMovie, setMovieIdFavorite } from "../../../redux/Main/favorites-reducer";
import { getFavouriteMovie, getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { Card } from "../Featured/Card/Card";
// reuse different styles
import "./../Featured/Featured.scss"
import "./../Contant/Contant.scss"

type PropsType = {}


export const Favorites: React.FC<PropsType> = (props) => {


    let dispatch = useDispatch()
    let favouriteIds = useSelector(getFavouriteMovieId)
    let favouriteMovies = useSelector(getFavouriteMovie)

    useEffect(() => {
        document.title = "Favorites"
        favouriteIds.forEach(id => dispatch(setMovieIdFavorite(id)))
        return () => {
            dispatch(removeMovie())
        }
    }, [])

    return (<>
        <h2 className="featured__title">{!!favouriteMovies.length ? `${favouriteMovies.length} favorites` : "Favorites"} </h2>
        <div style={{height: "80%"}} className="featured">
            {!!favouriteMovies.length ? <div className="featured__movies">
                {favouriteMovies && favouriteMovies.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el}/>)} 
            </div> : 
            <div className="wrapper">
                <div className="contant">
                    <div className="contant__smile">
                        <svg style={{color: "rgb(27, 35, 41)"}} viewBox="0 0 24 24" fill-rule="nonzero" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><path stroke="0" fill="currentColor" d="M2.9 2.9L19.78 19.8c.21.2.21.54 0 .74a.53.53 0 0 1-.74 0l-2.96-2.96-3.37 3.38a1 1 0 0 1-1.42 0l-7.67-7.67a5.52 5.52 0 0 1 .18-8L2.16 3.66a.53.53 0 0 1 0-.75c.2-.2.54-.2.74 0zm9.45 16.9l2.99-2.96-10.8-10.8a4.49 4.49 0 0 0-.18 6.49l7.29 7.28c.2.2.5.2.7 0zm7.3-7.27a4.47 4.47 0 1 0-7.05-5.38c-.27.25-.47.38-.6.38s-.33-.13-.59-.38A4.46 4.46 0 0 0 7.53 4.9l-1.02.12-.86-.85a5.56 5.56 0 0 1 1.88-.32c1.84 0 3.47.98 4.47 2.37a5.57 5.57 0 0 1 4.47-2.37 5.53 5.53 0 0 1 3.9 9.43l-2.8 2.8-.74-.74 2.81-2.81z"></path></svg>
                    </div>
                    <div className="contant__title">
                        You still have no favorites
                    </div>
                    <div className="contant__desc">you can add movies to your favorites clicking on the ♥ icon</div>
                </div>
            </div>}
            
        </div>
        </>
  )
};

