import React from 'react'
import Bar from './Bar'
import Binary from './Binary'

import './styles/TextBox.css';

export default class TextBox extends React.Component {

    state = {
        content:'',
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
        console.log(this.state.content)
    }
    
    render() {

        const maxLength = 101
        const content = this.state.content
        const charsLeft = maxLength - content.length
        
        return (
            <div>
                <h2 className="yellow">Morpheus : "Unfortunately no one can be told what The Matrix is,</h2>
                <h2 className="yellow">You'll have to see it for yourself"</h2>
                <div>
                    <Bar val={ charsLeft } max={ maxLength }/>
                    <textarea 
                        className="text-box"
                        onChange={ this.handleChange }
                        placeholder="talk to Morpheus...">
                    </textarea>
                    <div>
                    <h2 className={ charsLeft < 20 ? 'yellow' : 'green' }>{ charsLeft }</h2>
                    <Binary content={ content }/>
                    </div>
                </div>
            </div>
        )
    }
}