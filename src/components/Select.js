import React from 'react'
import { sample, shuffle } from 'lodash'
import './styles/Languages.css';

export default class Select extends React.Component {

    state = {
      languages: ['Ruby 1995', 'JavaScript 1995', 'PHP 1995', 'Java 1995', 'Scala 2004', 'Elixir 2011', 'Crystal 2014', 'Haskell 1990', 'C# 2000', 'Python 1990', 'C++ 1985', 'Go 2009'],
      colors: ['#FFCC80', '#FFF59D', '#C5E1A5', '#80CBC4', '#9FA8DA', '#CE93D8', '#EF9A9A',  '#FFAB91', '#F48FB1', '#B39DDB' , '#E6EE9C', '#A5D6A7']
    }
  
    changeColor = () => {
        return {
            backgroundColor: sample(this.state.colors),
            borderRadius: `${sample([10, 20, 30, 50])}%`
        }
    }

    refresh = () => {
        this.setState({
            languages: this.state.languages
        })
    }

    renderLanguages = (language, index) => {
        let each = language.split(' ')
        console.log(each)
        return (
            <div>
                <div style={ this.changeColor(index) } className="languages" key={index}>
                    <h3>{ each[0] }</h3>
                    <h3>{ each[1] }</h3>
                </div>
            </div>
        )
    }

    render() {

        const { languages } = this.state

        return (
            <div>
                <div className="languages-box">
                    {shuffle(languages.map( this.renderLanguages ))}
                </div>

                <div>
                    <button className="color-btn" onClick={() => this.refresh()}>0 1</button>
                </div>
            </div>
        )
    }
}
