import React, { useState } from "react"
import { Search } from "./Search/Search";
import "./Contant.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsFetching, getMoviesSelector } from "../../../redux/selectors/contant-selector";
import { Card } from "../Featured/Card/Card";
import { getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { setEmptyMultPage, setMoviesPage, setMoviesPages } from "../../../redux/Main/contant-reducer";
import { Loader } from "../../../common/loader";

type PropsType = {}
export const Contant: React.FC<PropsType> = (props) => {

  let dispatch = useDispatch()

  let movie = useSelector(getMoviesSelector)
  let favouriteIds = useSelector(getFavouriteMovieId)
  let isFetching = useSelector(getIsFetching)

  let [searchText, searchTextSet] = useState('')


  useEffect(() => {
    document.title = "Cinema 🍿"
    let text = localStorage.getItem("textInSearch")
    if (text === null) {
      searchTextSet('')
    } else {
      searchTextSet(String(text))
    }
  }, [])


  useEffect(() => { 
    if(searchText){
      dispatch(setMoviesPage(searchText))
      localStorage.setItem("textInSearch", searchText)
    }else {
      dispatch(setEmptyMultPage())
      localStorage.removeItem("textInSearch") 
    }
  }, [searchText])


  let getPage = () => {
    let page = movie.length + 1  
    dispatch(setMoviesPages(searchText, page))
  }

  return (
    <>
      <Search searchText={searchText} searchTextSet={searchTextSet}></Search>  
      {!(movie.length === 0 || movie[0].results.length === 0) ? <div className="featured__movies">
        { movie.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el.results}/>)} 
        {movie[0].results.length > 19 && <button disabled={isFetching} onClick={() => getPage()} className="movie more" >
          <span>Load More</span>
        </button>}
      </div> 
        :
        <div className="wrapper">
        {isFetching ? <Loader></Loader> : <div className="contant">
          {!searchText || !movie ? <div>
            <div className="contant__smile">☝️</div>
            <div className="contant__title">
            Search for movie titles
            </div>
            <div className="contant__desc">use the search bar above</div>
          </div> : <div>
            <div className="contant__smile">😕</div>
            <div className="contant__title">
              No results found for {searchText}
            </div>
            <div className="contant__desc">let’s try another one</div>
          </div>}
        </div>}
      </div>}
    </>
  )
};

