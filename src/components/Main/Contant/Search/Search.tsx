import React, { useState } from "react"
import "./Search.scss"

type PropsType = {}
export const Search: React.FC<PropsType> = (props) => {

    let [searchText, searchTextSet] = useState('')

  return (
    <>
      <label className="search">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 14.5l-3.72-3.72"></path><circle cx="6.67" cy="6.67" r="5.33"></circle></g></svg>
        <input placeholder="Search movies, tv or people..." className="search__input" type="text"/>
      </label>
    </>
  )
};

