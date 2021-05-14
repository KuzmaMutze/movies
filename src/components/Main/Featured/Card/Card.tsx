import React, { useEffect, useState } from "react"
// @ts-ignore
import LazyImage from "react-lazy-progressive-image";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MovieFeaturedType } from "../../../../api/types/types";
import { splitDate } from "../../../../helpers/helpers";
import { setIdMovieIdFavorite } from "../../../../redux/Main/favorites-reducer";
import './Card.scss'

type PropsType = {
    el: any
    idsFavouriteMovie: Array<number>
}

const Image = styled.img`
    filter: blur(${props => (props.loading ? 15 : 0)}px);
`;



export const Card: React.FC<PropsType> = (props) => {

    let dispatch = useDispatch()
    
    let addIdToFavorites = (id: number) => {
        dispatch(setIdMovieIdFavorite(id))
    }
        
    return (
    <>
        {props.el.map((movie : MovieFeaturedType) => <div className="movie">
                        <div className="movie__hover">
                            <div className="icon-like">
                                <div className="media-type">
                                    {/* {movie.media_type} */}
                                </div>
                                <button onClick={() => addIdToFavorites(movie.id)} className={`${props.idsFavouriteMovie.some((id: number) => id === movie.id) && "favorite"} ${"btn-like"}`}>
                                    <svg className="withoutlike" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2" stroke="currentColor" fill="none" d="M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z"></path></svg>
                                    <svg className="like" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2" stroke="currentColor" fill="currentColor" d="M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z"></path></svg>
                                </button>
                            </div>
                            <NavLink to={`/movies/${movie.id}`} >
                                <div className="hover__bg">

                                </div>
                                <div className="hover__box-info">
                                    <div className="title">
                                        <h3>  
                                            {movie.title}
                                        </h3>
                                    </div> 
                                    <div className="year">
                                        <span>
                                            {!!movie.release_date ? splitDate(movie.release_date) : ""}
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div style={{height: "100%"}} className="movie__wrapper-img" >
                            {movie.poster_path ? <LazyImage
                                placeholder={`https://image.tmdb.org/t/p/w45/${movie.poster_path}`}
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            >
                                {(src: any, loading: any) => <Image src={src} loading={loading} alt="poster-movie's"/>}
                            </LazyImage> : <svg className="no-poster" viewBox="0 0 48 48" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-width="2" fill="none" d="M2 2v44M46 2v44M10 2h28v44H10zM2 24h44M2 16h8M2 8h8M38 16h8M38 8h8M38 40h8M38 32h8M2 40h8M2 32h8"></path></svg>}
                        </div>
                    </div>)}
    </>
  )
};

