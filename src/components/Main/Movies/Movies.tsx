import React, { useState } from "react"
import { Search } from "./../Contant/Search/Search";
import "./../Contant/Contant.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSelector } from "../../../redux/selectors/contant-selector";
import { Card } from "../Featured/Card/Card";
import { getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { setEmptyMultPage, setMoviesPage, setMoviesPages } from "../../../redux/Main/contant-reducer";
import { getIsFetching } from "../../../redux/selectors/featured-selectors";

type PropsType = {}
export const Movies: React.FC<PropsType> = (props) => {

  let dispatch = useDispatch()

  let movies = useSelector(getMoviesSelector)
  let favouriteIds = useSelector(getFavouriteMovieId)
  let isFetching = useSelector(getIsFetching)

  let [searchText, searchTextSet] = useState('')

  useEffect(() => {
    document.title = "Movies"
  }, [])

  useEffect(() => {
    if (searchText) {
      dispatch(setMoviesPage(searchText))
    }else {
      dispatch(setEmptyMultPage())
    }
  }, [searchText])

  let getPage = () => {
    let page = movies.length + 1  
    dispatch(setMoviesPages(searchText, page))
  }

  return (
    <>
      <Search searchText={searchText} searchTextSet={searchTextSet}></Search>  
      {!!movies.length ? <div className="featured__movies">
        {movies && movies.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el.results}/>)} 
        <button disabled={isFetching} onClick={() => getPage()} className="movie more" >
          <span>Load More</span>
        </button>
      </div> 
        :
        <div className="wrapper">
        <div className="contant">
          <div className="contant__smile">☝️</div>
          <div className="contant__title">
            Search for movie titles
          </div>
          <div className="contant__desc">use the search bar above</div>
        </div>
      </div>}
    </>
  )
};
