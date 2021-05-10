import React, { useState } from "react"
import { Search } from "./../Contant/Search/Search";
import "./../Contant/Contant.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSelector } from "../../../redux/selectors/contant-selector";
import { Card } from "../Featured/Card/Card";
import { getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { setMoviesPage } from "../../../redux/Main/contant-reducer";

type PropsType = {}
export const Movies: React.FC<PropsType> = (props) => {

  let dispatch = useDispatch()

  let movies = useSelector(getMoviesSelector)
  let favouriteIds = useSelector(getFavouriteMovieId)

  let [searchText, searchTextSet] = useState('')

  useEffect(() => {
    document.title = "Movies"
  }, [])

  useEffect(() => {
    dispatch(setMoviesPage(searchText))
  }, [searchText])

  return (
    <>
      <Search searchText={searchText} searchTextSet={searchTextSet}></Search>  
      {!!movies.length ? <div className="featured__movies">
        {movies && movies.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el.results}/>)} 
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
