import React, { useState } from "react"
import { Search } from "./Search/Search";
import "./Contant.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMultiPageSelector } from "../../../redux/selectors/contant-selector";
import { Card } from "../Featured/Card/Card";
import { getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { setMultPage, setMultPages } from "../../../redux/Main/contant-reducer";
import { NavLink } from "react-router-dom";
import { getIsFetching } from "../../../redux/selectors/featured-selectors";

type PropsType = {}
export const Contant: React.FC<PropsType> = (props) => {

  let dispatch = useDispatch()

  let multiPage = useSelector(getMultiPageSelector)
  let favouriteIds = useSelector(getFavouriteMovieId)
  let isFetching = useSelector(getIsFetching)

  let [searchText, searchTextSet] = useState('')

  useEffect(() => {
    document.title = "Cinema 🍿"
  }, [])

  useEffect(() => { 
    dispatch(setMultPage(searchText))
  }, [searchText])

  let getPage = () => {
    let page = multiPage.length + 1  
    dispatch(setMultPages(searchText, page))
  }

  return (
    <>
      <Search searchText={searchText} searchTextSet={searchTextSet}></Search>  
      {!!multiPage.length ? <div className="featured__movies">
        {multiPage && multiPage.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el.results}/>)} 
        <button disabled={isFetching} onClick={() => getPage()} className="movie more" >
         <span>Load More</span>
        </button>
      </div> 
      
        :
        <div className="wrapper">
        <div className="contant">
          <div className="contant__smile">☝️</div>
          <div className="contant__title">
            {"Search for "} 
            <NavLink to="movies">movies</NavLink>
            {", "}
            <NavLink to="tv">{"tv series"}</NavLink>
            {" or "} 
            <NavLink to="people"> people</NavLink>
          </div>
          <div className="contant__desc">use the search bar above</div>
        </div>
      </div>}
    </>
  )
};

