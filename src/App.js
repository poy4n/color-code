import React, { useState } from 'react';
import Resume from './components/Resume';
import Matrix from './components/Matrix';
import Wheel from './components/Wheel';
import ColorBox from './components/ColorBox';
import Rainbow from './components/Rainbow';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import './App.css';
import './components/styles/Logo.css';
import './components/styles/Header.css';

export default function App() {
	const [ nav, setNav ] = useState([
		{ className: 'nav', route: '/wheel', name: 'Wheel' },
		{ className: 'nav', route: '/matrix', name: 'Matrix' },
		{ className: 'nav', route: '/rainbow', name: 'Rainbow' },
		{ className: 'nav', route: '/dance', name: 'Dance' },
		{ className: 'nav', route: '/resume', name: 'Resume' },
		{ className: 'nav', route: '/', name: 'Projects' }
	]);

	return (
		<div className='App'>
			<Router>
				<div className='header'>
					{nav.map((link, i) => (
						<NavLink key={i} activeClassName='active-nav' className={link.className} to={link.route} exact>
							{link.name}
						</NavLink>
					))}
				</div>
				<Switch>
					<Route path='/dance'>
						<ColorBox />
					</Route>
					<Route path='/matrix'>
						<Matrix />
					</Route>
					<Route path='/rainbow'>
						<Rainbow />
					</Route>
					<Route path='/wheel'>
						<Wheel />
					</Route>
					<Route path='/resume'>
						<Resume />
					</Route>
					<Route path='/' exact>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
