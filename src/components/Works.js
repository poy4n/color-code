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
                label: 'TicTacToe',
                url: 'https://poy4n.github.io/tictactoe/'
            },
            {
                label: 'Emotions',
                url: 'https://emotions-tracker.herokuapp.com/'
            },
            {
                label: 'FlashZoo',
                url: 'https://beasuf.github.io/flash_zoo_client/'
            },
            {
                label: 'SolarSystem',
                url: 'https://solar-planets-app.herokuapp.com/'
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