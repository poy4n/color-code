import React from 'react';
import Menu from './Menu';

import './styles/Rainbow.css';

export default class ColorPsy extends React.Component {
	state = {
		colors: [
			{
				color: `#F39C12`,
				descriptions:
					'Orange represents creativity, adventure, enthusiasm, success, and balance. Orange adds a bit of fun to any picture, website, or marketing material.'
			},
			{
				color: `#F4D03F`,
				descriptions:
					'Yellow revolves around sunshine. It evokes feelings of happiness, positivity, optimism, and summer but also of deceit and warning.'
			},
			{
				color: `#AF7AC5`,
				descriptions:
					'Purple is a royal color. Purple is connected to power, nobility, luxury, wisdom, and spirituality.'
			},
			{
				color: `#E74C3C`,
				descriptions:
					'Red is associated with excitement, passion, danger, energy, action and provoke the strongest emotions.'
			},
			{
				color: `#5DADE2`,
				descriptions:
					'Blue ties closely to the sea and the sky. Blue is stability, harmony, peace, calm and trust. Conversely, Blue can bring about a sense of coldness.'
			},
			{
				color: `#52BE80`,
				descriptions:
					'Green is highly connected to nature, growth, fertility, health, and generosity. Green carries negative associations such as envy.'
			},
			{
				color: `#F7F9F9`,
				descriptions:
					'White showcases innocence, goodness, cleanliness, and humility. White has a negative side where it symbolizes sterility and cold.'
			}
		],
		selectedColor: null,
		rainbow: []
	};

	changeColor = (index) => {
		return {
			width: '100px',
			height: '100px',
			backgroundColor: `${this.state.colors[index].color}`,
			borderRadius: `${[ 50 ]}%`
		};
	};

	add = (color) => {
		this.setState({
			rainbow: [ ...this.state.rainbow, color ]
		});
	};

	addRainbow = (index) => {
		return {
			height: '15px',
			backgroundColor: `${this.state.rainbow[index].color}`,
			borderRadius: `${[ 50 ]}%`,
			width: '80%',
			display: 'flex',
			margin: 'auto'
		};
	};

	renderRainbow = (color, index) => {
		return <div key={index} style={this.addRainbow(index)} />;
	};

	render() {
		const { colors, selectedColor, rainbow } = this.state;
		return (
			<div className='color-container'>
				<Menu />
				<h2>make a rainbow</h2>
				<div>
					<div className='box'>
						{colors.map((color, index) => (
							<div key={index} className='box-container'>
								<div
									className='each-box'
									style={this.changeColor(index)}
									onMouseOver={() => this.setState({ selectedColor: color })}
									onMouseEnter={() => this.add(color)}
									key={index}
								/>
							</div>
						))}
					</div>
					<div className='details'>{selectedColor !== null && <h2>{selectedColor.descriptions}</h2>}</div>
					<div className='rainbow-box'>{rainbow.map(this.renderRainbow)}</div>
				</div>
			</div>
		);
	}
}
