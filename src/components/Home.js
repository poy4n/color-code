import React from 'react';
import ColorsBackGr from './ColorsBackGr';
import Menu from './Menu';

import './styles/Home.css';
import './styles/Menu.css';

export default class Home extends React.Component {
	state = {
		projects: [
			{
				color: '#dc7633',
				name: 'uraXa Map',
				link: 'https://uraxa-netllfy-app.netlify.app/',
				git: 'https://github.com/poy4n/uraXa',
				stack: 'HERE Tech API-React-JavaScript-Node.js-Express-PostgreSQL-CSS'
			},
			{
				color: '#a569bd',
				name: 'Marketplace',
				link: 'https://warm-tundra-09087.herokuapp.com/',
				git: 'https://github.com/poy4n/grocery-app',
				stack: 'React-JavaScript-Node.js-Express-CSS'
			},
			{
				color: '#5499c7',
				name: 'Color Sudoku',
				link: 'http://color-sudoku.surge.sh/',
				git: 'https://github.com/poy4n/color-sudoku',
				stack: 'React-JavaScript-CSS'
			},
			{
				color: '#cd6155',
				name: 'Flash Zoo',
				link: 'https://beasuf.github.io/flash_zoo_client/',
				git: 'https://github.com/poy4n/flash_zoo_client',
				stack: 'Unsplash API-JavaScript-Node.js-Express-PostgreSQL-HTML-CSS'
			},
			{
				color: '#f4d03f',
				name: 'TicTacToe',
				link: 'https://poy4n.github.io/tictactoe/',
				git: 'https://github.com/poy4n/tictactoe',
				stack: 'JavaScript-HTML-CSS'
			},
			{
				color: '#52be80',
				name: 'Emotion Tracker',
				link: 'https://emotions-tracker.herokuapp.com/',
				git: 'https://github.com/poy4n/emotions-tracker',
				stack: 'Ruby-Sinatra-PostgreSQL-HTML-CSS'
			}
		]
	};

	render() {
		return (
			<div className='container'>
				<Menu />
				<h1>Software Developer</h1>
				<h3>Programmer + Designer</h3>
				<div className='home'>
					{this.state.projects.map((box, index) => {
						return (
							<div className='project-container' key={index}>
								<a href={box.link} target='_blank'>
									<div className='overlay' style={{ backgroundColor: box.color }} />
									<img
										className='project-img'
										style={{ border: `5px solid ${box.color}` }}
										src={require(`../projectsimg/${index + 1}.jpg`)}
										alt=''
									/>
								</a>
								<ColorsBackGr />
								<div className='project-detail' style={{ backgroundColor: box.color }}>
									<h2 className='project-name'>{box.name}</h2>
									<a
										className='project-link'
										href={box.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										access the app
									</a>
									<a
										className='project-link'
										href={box.git}
										target='_blank'
										rel='noopener noreferrer'
									>
										find the code
									</a>
								</div>
								<p style={{ backgroundColor: box.color }}>{box.stack}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
