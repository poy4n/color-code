import React from 'react'

import './styles/Play.css';

export default class Play extends React.Component{
        
    state = {
        descriptions : [
            'orange',
            'yellow',
            'purple',
            'red',
            'blue',
            'green',
            'white'
        ]
    }

    changeColor = (colors) => {
        return {
            backgroundColor: `${colors}`
        }
    }

    showDetail = targetIndex => {
        return (
            // console.log(targetIndex)
            <p className="details" >{ this.state.descriptions[targetIndex] }</p>
        )
    }

    renderColors = (colors, index) => {
        return (
            <div 
                onClick={ () => this.showDetail(index) } 
                style={ this.changeColor(colors) } 
                className="each-box" 
                key={index}>
            </div>
        )
    }

    render() {

        const colors = ['#DC7633', '#F4D03F', '#A569BD', '#CD6155', '#5499C7', '#52BE80', '#F0F3F4']
        
        return (
            <div>
                <div className="box">
                    {colors.map( this.renderColors )}
                </div>
                <div>{ this.showDetail() }</div>
            </div>
        )
    }
}