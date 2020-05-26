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
				name: 'uraXa map',
				link: '12312213',
				git: 'wrfddsafsdf'
			},
			{
				color: '#a569bd',
				name: 'uraXa map',
				link: '12312213',
				git: 'wrfddsafsdf'
			},
			{
				color: '#5499c7',
				name: 'uraXa map',
				link: '12312213',
				git: 'wrfddsafsdf'
			},
			{
				color: '#cd6155',
				name: 'uraXa map',
				link: '12312213',
				git: 'wrfddsafsdf'
			},
			{
				color: '#52be80',
				name: 'uraXa map',
				link: '12312213',
				git: 'wrfddsafsdf'
			},
			{
				color: '#f4d03f',
				name: 'uraXa map',
				link: '12312213',
				git: 'wrfddsafsdf'
			}
		]
	};

	render() {
		return (
			<div>
				<Menu />
				<div className='home'>
					{this.state.projects.map((box, index) => {
						return (
							<div key={index}>
								<img
									className='project-img'
									style={{ border: `5px solid ${box.color}` }}
									src={require(`../projectsimg/${index + 1}.jpg`)}
									alt=''
								/>
								<ColorsBackGr />
								<div className='project-detail' style={{ backgroundColor: box.color }}>
									<h2 className='project-name'>{box.name}</h2>
									<a className='project-link' href={box.link} target='_blank'>
										access the app
									</a>
									<a className='project-link' href={box.git} target='_blank'>
										find the code here
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
