import React from 'react';
import { sample, shuffle } from 'lodash';

import './styles/Colors.css';

export default class Select extends React.Component {
	state = {
		colors: [ '#16161e', '#d19a41', '#d63a41', '#16161e', '#40a4db', '#8d216d', '#16161e', '#407d0a', '#c24523' ],
		number: 16
	};

	changeColor = () => {
		return {
			backgroundColor: sample(this.state.colors)
		};
	};

	refresh = () => {
		this.setState({
			languages: this.state.languages
		});
	};

	renderBoxes = (language, index) => {
		return (
			<div key={index}>
				<div style={this.changeColor(index)} className='colors' key={index} />
			</div>
		);
	};

	render() {
		const { number } = this.state;
		const boxes = [];
		for (let i = 1; i <= number; i++) {
			boxes.push(i);
		}
		return (
			<div className='canvas-home'>
				<div onMouseOver={() => this.refresh()} className='color-box'>
					{shuffle(boxes.map(this.renderBoxes))}
				</div>
			</div>
		);
	}
}
