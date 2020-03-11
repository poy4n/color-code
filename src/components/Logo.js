import React from 'react';
import image from './resources/logo.png'

export default class Logo extends React.Component {

    state = {
        number: 0,
    }

    handleUp = e => {
        this.setState({
            number: e.target.value
        })
    }

    render() {
        const number = this.state.number    
        const speed = {
            animation: `logo infinite ${number}ms linear`
        }
        return (
            <div className="logo-wrap">
                <div style={ speed } className="logo">
                    <img src={ image } alt="there is a wheel"/>
                </div>
                <h2 className="speed-num">{ `${number} ms` }</h2>
                <div>
                    <span className="speed-num">Fast</span>
                    <input className="slider" onChange={ this.handleUp } type="range" value={ number } min="0" max="2020" step="101"></input>
                    <span className="speed-num">Slow</span>
                </div>
                <p className="message" >double click or hold and drag the slider</p>
            </div>
        )
    }
}