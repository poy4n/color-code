import React from 'react';
import { sample, shuffle } from 'lodash';
import './styles/Colors.css';

export default class Select extends React.Component {
	state = {
		colors: [ '#16161e', '#d19a41', '#d63a41', '#40a4db', '#16161e', '#8d216d', '#407d0a', '#c24523', '#F0F3F4' ],
		number: 0
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
			<div key={index}>
				<div style={this.changeColor(index)} className='colors' key={index} />
			</div>
		);
	};

	handleUp = (e) => {
		this.setState({
			number: e.target.value
		});
	};

	render() {
		const { number } = this.state;
		const boxes = [];
		for (let i = 1; i <= number; i++) {
			boxes.push(i);
		}
		return (
			<div className='canvas'>
				<div>
					<h2>colors dance</h2>
					<input
						className='slider'
						onChange={this.handleUp}
						value={number}
						type='range'
						min='0'
						max='2020'
						step='10'
					/>
					<span className='speed-num'>{number}</span>
				</div>
				<div onMouseOver={() => this.refresh()} className='color-box'>
					{shuffle(boxes.map(this.renderBoxes))}
				</div>
			</div>
		);
	}
}
