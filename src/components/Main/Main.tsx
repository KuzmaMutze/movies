import React from "react"
import { Contant } from "./Contant/Contant";
import "./Main.scss"
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Featured } from "./Featured/Featured";
import { Movie } from "./Movie/Movie";
import { Favorites } from "./Favorites/Favorites";
import { Movies } from "./Movies/Movies";

export const Main: React.FC = (props) => {



  return (
    <main>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home"></Redirect>}/>
          <Route exact path="/favorites" component={() => <Favorites></Favorites>}/>
          <Route exact path="/home" component={() => <Contant></Contant>}/>
          <Route exact path="/movies/:id" component={ () => <Movie></Movie> }/>
          <Route exact path="/movies" component={ () => <Movies></Movies> }/>
          <Route exact path="/featured" component={ () => <Featured></Featured> }/>
        </Switch>
    </main>
  )
};

