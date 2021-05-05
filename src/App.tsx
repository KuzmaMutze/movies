import React from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Haeder } from './components/Header/Header';
import { Main } from './components/Main/Main';
import {
	BrowserRouter as Router,
  } from "react-router-dom";

function App() {
  	return (
		<div className="App">
			<Router>
				<Haeder></Haeder>
				<Main></Main>
				<Footer></Footer>
			</Router>
		</div>
  	);
}

export default App;
