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
            animation: `logo infinite ${ number }ms linear`
        }

        return (
            <div className="logo-wrap">
                <div style={ speed } className="logo">
                    <img src={ image } alt="there is a wheel"/>
                </div>
                <h2 className="speed-num">{ number }</h2>
                <div>
                    <input className="slider" onChange={ this.handleUp } type="range" value={ number } min="0" max="2020" step="101"></input>
                </div>
            </div>
        )
    }
}