import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { splitDate } from "../../../helpers/helpers";
import { getMovieId } from "../../../redux/Main/movie-reducer";
import { getMovieSelector } from "../../../redux/selectors/movie-selectors";
import './Movie.scss'

type ParamType = {
    id: string
}
export const Movie: React.FC = (props) => {

    let dispatch = useDispatch()
    let history = useHistory()
    let {id} = useParams<ParamType>();    
    
    let movie = useSelector(getMovieSelector)

    const refresh = () => {
        dispatch(getMovieId(Number(id)))
    }

    useEffect(() => {
        refresh()
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {movie && <div className="movie-wrapper">
                <div className="movie-wrapper__info">
                    <button onClick={history.goBack} className="btn-back">
                        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M9 19.07L1.93 12 9 4.93"></path><path d="M3 12h20"></path></g></svg>
                    </button>
                    <div className="subdesc">
                        <div className="data-time">
                            <span>
                                {splitDate(movie.release_date)}
                            </span>
                            <span>
                                {movie.runtime} min
                            </span>
                        </div>
                        <div className="adult">
                            <span>{!movie.adult ? "R" : "PG-13"}</span>
                        </div>
                    </div>
                    <div className="title">
                        {movie.title}
                    </div>
                    <div className="btns-box">
                        <div className="btns">
                            <a target="_blank" href={`https://imdb.com/title/${movie.imdb_id}`} className="IMB">
                                <div className="left">
                                    <svg viewBox="0 0 40 16" stroke-linecap="round" stroke-linejoin="round" width="40" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#0A1014" d="M0 7.89v7.88h4.08V-.01H0zM5.22 7.88v7.89h3.6v-5.08c.01-2.78.02-5.02.03-4.97.02.05.34 2.27.72 4.93l.72 4.98c.03.14.03.14 1.29.14 1.25 0 1.26 0 1.28-.14.02-.07.21-1.46.43-3.08.2-1.63.51-3.91.67-5.09l.29-2.13.01 5.22.02 5.22 1.78-.02 1.79-.01V.03L15.19.01 12.54 0l-.03.13-.45 3.51c-.51 4.04-.45 3.64-.5 3.52-.02-.05-.25-1.66-.52-3.58-.27-1.92-.5-3.5-.52-3.54C10.5.02 9.3 0 7.85 0H5.22v7.88zM19.02 7.89v7.89l3.4-.03c2.95-.02 3.46-.04 3.85-.13 1.16-.26 1.79-.84 2.04-1.86.12-.5.18-2.3.18-5.49 0-3.44-.07-5.36-.2-5.88-.33-1.23-1.24-1.97-2.72-2.2C24.8.07 23.2 0 21.1 0h-2.08v7.89zM24 2.86c.38.2.37.17.4 4.06.03 3.67-.03 5.3-.18 5.68-.12.25-.36.4-.8.44l-.33.04V2.69l.36.04c.2.02.45.08.55.13zM29.6 7.88v7.89H33.25l.07-.24.13-.5.06-.24.18.21c.22.28.9.73 1.28.86.94.32 2.07.1 2.8-.57.37-.33.55-.65.69-1.18.1-.38.1-.8.1-5.08V4.36l-.15-.35c-.33-.7-.8-1.09-1.55-1.28a4.25 4.25 0 0 0-1.85 0c-.4.12-.92.43-1.26.75-.11.1-.21.2-.23.2 0 0-.02-.83-.02-1.84V0h-3.9v7.88zm4.7-2.92c.36.15.36.13.39 3.92 0 1.93 0 3.67-.04 4-.05.5-.08.58-.22.7a.49.49 0 0 1-.66 0c-.26-.22-.28-.6-.26-4.59.02-3.96.02-3.93.34-4.05.22-.08.22-.08.45.02z"></path>/&gt;</svg>
                                </div>
                                <div className="right">{movie.vote_average}/10</div>
                            </a>
                        </div>
                        <button className="like">
                            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2.5" stroke="currentColor" fill="none" d="M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z"></path></svg>
                            <span>Add tp favourites</span>
                        </button>
                    </div>
                    <div className="desc">
                        <h5 className="desc__title">Plot</h5>
                        <div className="desc__info">{movie.overview}</div>
                    </div>
                    {/* <div className="footer">
                        <div className="actors">
                            <div className="actors__item">
                                <img src="https://image.flaticon.com/icons/png/128/666/666201.png" alt="" />
                                <a href="#">Matvey Fedorof</a>
                            </div>
                            <div className="actors__item">
                                <img src="https://image.flaticon.com/icons/png/128/666/666201.png" alt="" />
                                <a href="#">Matvey Fedorof</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="genres">
                                <h5 className="genres__title">Genres</h5>
                                <div className="genres__desc">
                                    Action
                                    Fantasy
                                    Adventure
                                    Science Fiction
                                </div>
                            </div>
                            <div className="directors">
                                <h5 className="directors__title">Directors</h5>
                                <div className="directors__item">
                                    <img src="https://image.flaticon.com/icons/png/128/666/666201.png" alt="" />
                                    <a href="#">Matvey Fedorof</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="movie-wrapper__poster">
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="poster" />
                </div>
            </div>}
        </>
    )
};

