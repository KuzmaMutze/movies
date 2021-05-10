import React from "react"
import { Search } from "./Search/Search";
import "./Contant.scss"
import { useEffect } from "react";

type PropsType = {}
export const Contant: React.FC<PropsType> = (props) => {

  useEffect(() => {
    document.title = "Cinema 🍿"
  }, [])

  return (
    <>
      <Search></Search>  
      <div className="wrapper">
        <div className="contant">
          <div className="contant__smile">☝️</div>
          <div className="contant__title">
            {"Search for "} 
            <a href="">movies</a>
            {", "}
            <a href="">{"tv series"}</a>
            {" or "} 
            <a href=""> people</a>
          </div>
          <div className="contant__desc">use the search bar above</div>
        </div>
      </div>
    </>
  )
};

