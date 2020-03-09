import React from 'react'
import { sample, shuffle } from 'lodash'
import './styles/Languages.css';

export default class Select extends React.Component {

    state = {
      languages: ['Ruby 1995', 'JavaScript 1995', 'PHP 1995', 'Java 1995', 'Scala 2004', 'Elixir 2011', 'Crystal 2014', 'Haskell 1990', 'C# 2000', 'Python 1990', 'C++ 1985', 'Go 2009'],
      colors: ['#16161e', '#DC7633', '#F4D03F', '#A569BD', '#CD6155', '#5499C7', '#52BE80', '#F0F3F4']
    }
  
    changeColor = () => {
        return {
            backgroundColor: sample(this.state.colors),
            borderRadius: `${sample([0, 50])}%`
        }
    }

    refresh = () => {
        this.setState({
            languages: this.state.languages
        })
    }

    renderLanguages = (language, index) => {
        // let each = language.split(' ')
        // console.log(each)
        return (
            <div>
                <div style={ this.changeColor(index) } className="languages" key={index}>
                    {/* <h3>{ each[0] }</h3> */}
                    {/* <h3>{ each[1] }</h3> */}
                </div>
            </div>
        )
    }

    render() {

        const { languages } = this.state

        const boxes = [];
        for (let i = 1; i <=910; i++) {
            boxes.push(i);
        }

        return (
            <div>
                <div className="languages-box">
                    {shuffle(boxes.map( this.renderLanguages ))}
                </div>

                <div>
                    <button className="color-btn" onClick={() => this.refresh()}>0 1</button>
                </div>
            </div>
        )
    }
}
