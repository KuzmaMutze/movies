import React, { useState } from "react"
import { Search } from "../Contant/Search/Search";
import "./../Contant/Contant.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleSelector } from "../../../redux/selectors/contant-selector";
import { Card } from "../Featured/Card/Card";
import { getFavouriteMovieId } from "../../../redux/selectors/favourite-selectors";
import { setEmptyMultPage, setPeoplePage, setPeoplePages } from "../../../redux/Main/contant-reducer";
import { getIsFetching } from "../../../redux/selectors/featured-selectors";

type PropsType = {}
export const People: React.FC<PropsType> = (props) => {

  let dispatch = useDispatch()

  let people = useSelector(getPeopleSelector)
  let favouriteIds = useSelector(getFavouriteMovieId)
  let isFetching = useSelector(getIsFetching)

  let [searchText, searchTextSet] = useState('')

  useEffect(() => {
    document.title = "Movies"
  }, [])

  useEffect(() => {
    if (searchText) {
      dispatch(setPeoplePage(searchText))
    }else {
      dispatch(setEmptyMultPage())
    }
  }, [searchText])

  let getPage = () => {
    let page = people.length + 1  
    dispatch(setPeoplePages(searchText, page))
  }

  return (
    <>
      <Search searchText={searchText} searchTextSet={searchTextSet}></Search>  
      {!!people.length ? <div className="featured__movies">
        {people && people.map((el : any) => <Card idsFavouriteMovie={favouriteIds} el={el.results}/>)} 
        <button disabled={isFetching} onClick={() => getPage()} className="movie more" >
          <span>Load More</span>
        </button>
      </div> 
        :
        <div className="wrapper">
        <div className="contant">
          <div className="contant__smile">☝️</div>
          <div className="contant__title">
            Search for people titles
          </div>
          <div className="contant__desc">use the search bar above</div>
        </div>
      </div>}
    </>
  )
};
