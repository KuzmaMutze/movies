import React from "react"
import { Search } from "./Search/Search";
import "./Contant.scss"

type PropsType = {}
export const Contant: React.FC<PropsType> = (props) => {
  return (
    <>
      <Search></Search> 
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
    </>
  )
};

