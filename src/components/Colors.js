import React from 'react'
import { sample, shuffle } from 'lodash'
import './styles/Colors.css';

export default class Select extends React.Component {

    state = {
      languages: ['Ruby 1995', 'JavaScript 1995', 'PHP 1995', 'Java 1995', 'Scala 2004', 'Elixir 2011', 'Crystal 2014', 'Haskell 1990', 'C# 2000', 'Python 1990', 'C++ 1985', 'Go 2009'],
      colors: ['#16161e', '#DC7633', '#F4D03F', '#A569BD', '#CD6155', '#5499C7', '#52BE80', '#F0F3F4']
    }
  
    changeColor = () => {
        return {
            backgroundColor: sample(this.state.colors),
            borderRadius: `${sample([0, 25, 50])}%`
        }
    }

    refresh = () => {
        this.setState({
            languages: this.state.languages
        })
    }

    renderLanguages = (language, index) => {
        return (
            <div>
                <div style={ this.changeColor(index) } className="colors" key={index}></div>
            </div>
        )
    }

    render() {

        const boxes = [];
        for (let i = 1; i <=2037; i++) {
            boxes.push(i);
        }

        return (
            <div className="canvas">
                <h2>choose your color</h2>
                <div onClick={() => this.refresh()} className="color-box">
                    {shuffle(boxes.map( this.renderLanguages ))}
                </div>
            </div>
        )
    }
}