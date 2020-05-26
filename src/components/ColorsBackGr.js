import React from 'react';
import { sample, shuffle } from 'lodash';

import './styles/Colors.css';

export default class Select extends React.Component {
	state = {
		colors: [ '#16161e', '#dc7633', '#a569bd', '#16161e', '#5499c7', '#cd6155', '#16161e', '#52be80', '#f4d03f' ],
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
