import React from 'react';
import TextBox from './TextBox';
import Menu from './Menu';

export default function About() {
	return (
		<div>
			<Menu />
			<div className='text-boxes'>
				<TextBox />
			</div>
		</div>
	);
}
