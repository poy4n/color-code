import React from 'react';
import { sample, shuffle } from 'lodash';

import './styles/Colors.css';

export default class Select extends React.Component {
	state = {
		colors: [ '#16161e', '#DC7633', '#F4D03F', '#A569BD', '#CD6155', '#5499C7', '#52BE80', '#F0F3F4' ],
		number: 16
	};

	changeColor = () => {
		return {
			backgroundColor: sample(this.state.colors),
			borderRadius: `${sample([ 0, 25, 50 ])}%`
		};
	};

	refresh = () => {
		this.setState({
			languages: this.state.languages
		});
	};

	renderBoxes = (language, index) => {
		return (
			<div>
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
