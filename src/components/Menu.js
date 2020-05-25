import React, { Component } from 'react';
import { sample } from 'lodash';

import './styles/Menu.css';

export default class Mene extends Component {
	state = {
		isClicked: false,
		colors: [ '#E1BEE7', '#C5CAE9', '#B3E5FC', '#C8E6C9', '#FFF3E0', '#FFCCBC' ]
	};

	handleClick = () => {
		this.setState({
			isClicked: !this.state.isClicked
		});
	};

	changeColor = () => {
		return {
			backgroundColor: sample(this.state.colors)
		};
	};

	render() {
		const links = [
			{
				label: 'ResumePDF',
				url: 'https://drive.google.com/file/d/1le8x9UsGnLJRuBsbNYs3xKNRtFGi2gEu/view?usp=sharing'
			},
			{
				label: 'LinkedIn',
				url: 'https://www.linkedin.com/in/pouyanmadanipour/'
			},
			{
				label: 'GitHub',
				url: 'https://github.com/poy4n'
			},
			{
				label: 'VisualWorks',
				url: 'https://www.instagram.com/solitarius.digital/'
			},
			{
				label: 'GAprofile',
				url: 'https://profiles.generalassemb.ly/profiles/pouyanmadanipour'
			}
		];
		const { isClicked } = this.state;
		return (
			<div className='menu-container'>
				<div className='menu-button' onClick={this.handleClick}>
					<i className='fas fa-bars' />
				</div>

				{links.length && (
					<nav className={`menu2 ${isClicked ? 'show' : ''}`}>
						<ul className='menu-items'>
							{links.map((item) => (
								<li style={this.changeColor(item.label)} className='menu-list' key={item.label}>
									<a className='menu-link' href={item.url} target='_blank'>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		);
	}
}
