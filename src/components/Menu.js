import React, { Component } from 'react'
import { sample, shuffle } from 'lodash'

import './styles/Menu.css';

export default class Mene extends Component {
    state = {
        isClicked: false,
        colors: ['#FFCC80', '#FFF59D', '#C5E1A5', '#80CBC4', '#9FA8DA', '#CE93D8', '#EF9A9A',  '#FFAB91', '#F48FB1', '#B39DDB' , '#E6EE9C', '#A5D6A7']
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    changeColor = () => {
        return {
            backgroundColor: sample(this.state.colors),
        }
    }

    render() {
        const links = [
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/pouyanmadanipour/'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/poy4n'
            },
            {
                label: 'Instagram',
                url: 'https://www.instagram.com/solitarius.digital/'
            },
            {
                label: 'p o u y a n',
                url: 'http://localhost:3000/about'
            },
        ]

        const { isClicked } = this.state
        return (
            <div className="menu-container">
                <div className="menu-button" onClick={ this.handleClick }>
                    <i className="fal fa-bars"></i>
                </div>

                { links.length && (
                    <nav className={ `menu ${isClicked ? 'show' : ''}` }>
                        <ul className="menu-items">
                            { shuffle(links.map(item => (
                                <li style={ this.changeColor(item.label) } className="menu-list" key={ item.label }>
                                    <a className="menu-link" href={ item.url } target="_blank">{ item.label }</a>
                                </li>
                            )))}
                        </ul>
                    </nav>
                )} 
            </div>
        )
    }
}