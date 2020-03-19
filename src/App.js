import React from 'react';
import './App.scss';

import {
	BrowserRouter,
	Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
	return (
		<BrowserRouter>
			<div className="navbar navbar-expand-md">
				<a className="navbar-brand" href="#">
					<div className="row pl-4">
						<div className="navbar-logo">
							I DON'T UNDERSTAND
						</div>
						<div className="navbar-logo-end-bs">SH*T</div>
					</div>
				</a>
				<ul class="nav navbar-collapse collapse justify-content-end pr-3">
					<li class="nav-item">
						<Link to="/" className="navbar-button">
							Home
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/about" className="navbar-button">
							About
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/contact" className="navbar-button">
							Contact Me
						</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
			<div className="fluid-container footer">
				
			</div>
		</BrowserRouter>
	);
}

export default App;
