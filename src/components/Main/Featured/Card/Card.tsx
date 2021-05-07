import React from "react"
// @ts-ignore
import LazyImage from "react-lazy-progressive-image";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MovieFeaturedType } from "../../../../api/types/types";

type PropsType = {
    el: any
}

const Image = styled.img`
    filter: blur(${props => (props.loading ? 15 : 0)}px);
`;


export const Card: React.FC<PropsType> = (props) => {

    function splitDate(date: string){
        let newDate = new Date(date)
        return newDate.getFullYear()
    }
    console.log(props.el);
    
    return (
    <>
        {props.el.results.map((movie : MovieFeaturedType) => <div className="movie">
                        <NavLink to="123" className="movie__hover">
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
                        </NavLink>
                        <div className="movie__wrapper-img" >
                            <LazyImage
                                placeholder={`https://image.tmdb.org/t/p/w45/${movie.poster_path}`}
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            >
                                {(src: any, loading: any) => <Image src={src} loading={loading} alt="poster-movie's"/>}
                            </LazyImage>
                        </div>
                    </div>)}
    </>
  )
};

