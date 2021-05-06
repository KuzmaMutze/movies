import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { MovieFeaturedType } from "../../../api/types/types";
import { getFeaturedMovies } from "../../../redux/featured-reducer";
import { getFeaturedMoviesSelector } from "../../../redux/selectors/featured-selectors";
import "./Featured.scss"
// @ts-ignore
import LazyImage from "react-lazy-progressive-image";
import styled from "styled-components";
type PropsType = {}

const Image = styled.img`
    filter: blur(${props => (props.loading ? 15 : 0)}px);
`;

export const Featured: React.FC<PropsType> = (props) => {

    function splitDate(date: string){
        let result = date.split('-');
        let month = result[0];
        return month;
    }

    let dispatch = useDispatch()
    let movies = useSelector(getFeaturedMoviesSelector)
    console.log(movies);
    
    useEffect(() => {
        dispatch(getFeaturedMovies())
    }, [])

    return (
        <div className="featured">
            <h2 className="featured__title">Featured movies</h2>
            <div  className="featured__movies">
                {movies.map((el : any) => <>
                    {el.map((movie : MovieFeaturedType) => <div className="movie">
                        <div className="movie__hover">
                            <div className="hover__bg">

                            </div>
                            <div className="hover__box-info">
                                <div className="icon-like">
                                    <button className="btn-like">
                                        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2" stroke="currentColor" fill="none" d="M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z"></path></svg>
                                    </button>
                                </div>
                                <div className="title">
                                    <h3>
                                        {movie.title}
                                    </h3>
                                </div>
                                <div className="year">
                                    <span>
                                        {splitDate(movie.release_date)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="movie__wrapper-img" >
                            <LazyImage
                                placeholder={`https://image.tmdb.org/t/p/w45/${movie.poster_path}`}
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            >
                                {(src: any, loading: any) => <Image src={src} loading={loading} alt="poster-movie's"/>}
                            </LazyImage>
                        </div>
                    </div>)}
                </>)} 
            </div>
        </div>
  )
};

