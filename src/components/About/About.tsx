import React from "react"
import './About.scss'
type PropsType = {}
export const About: React.FC<PropsType> = (props) => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>This app was done for educational purposes, the source code can be found on the <a href="#">KuzmaMutze/movies</a> github repo.</p>
    </div>
  )
};

