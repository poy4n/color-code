import React, { Component } from 'react';
import { sample } from 'lodash';

import './styles/Menu.css';

export default class Mene extends Component {
	state = {
		isClicked: false,
		colors: [ '#d19a41', '#d63a41', '#40a4db', '#8d216d', '#407d0a', '#c24523' ]
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
					<nav className={`menu ${isClicked ? 'show' : ''}`}>
						<ul className='menu-items'>
							{links.map((item) => (
								<li style={this.changeColor(item.label)} className='menu-list' key={item.label}>
									<a className='menu-link' href={item.url} target='_blank' rel='noopener noreferrer'>
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
