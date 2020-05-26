import React from 'react';
import ColorsBackGr from './ColorsBackGr';
import Menu from './Menu';

import './styles/Home.css';
import './styles/Menu.css';

export default class Home extends React.Component {
	state = {
		projects: [ '#dc7633', '#a569bd', '#5499c7', '#cd6155', '#52be80', '#f4d03f' ]
	};

	render() {
		return (
			<div>
				<Menu />
				<div className='home'>
					{this.state.projects.map((box, index) => {
						return (
							<div>
								<img
									className='project-img'
									style={{ border: `5px solid ${box}` }}
									src={require(`../projectsimg/${index + 1}.jpg`)}
									alt=''
								/>
								<ColorsBackGr />
								<div className='project-detail' style={{ backgroundColor: box }}>
									<a href=''>click here</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
