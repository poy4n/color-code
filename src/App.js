import React, { useState } from 'react';
import Resume from './components/Resume';
import Matrix from './components/Matrix';
import Wheel from './components/Wheel';
import ColorBox from './components/ColorBox';
import Rainbow from './components/Rainbow';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

	const toggleClass = (className) => (className === 'nav' ? 'active' : 'nav');

	const changeClass = (indexOfLinkToChange) => {
		const newNav = nav.map((link, i) => {
			let newLink = { ...link };
			if (i !== indexOfLinkToChange) {
				newLink.className = 'nav';
				return newLink;
			} else {
				newLink.className = toggleClass(newLink.className);
				return newLink;
			}
		});
		setNav(newNav);
	};

	return (
		<div className='App'>
			<Router>
				<div className='header'>
					{nav.map((link, i) => (
						<Link key={i} onClick={() => changeClass(i)} className={link.className} to={link.route}>
							{link.name}
						</Link>
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
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
