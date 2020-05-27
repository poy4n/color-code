import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Home() {
	return (
		<div className='color-container'>
			<Menu />
			<Logo />
		</div>
	);
}
