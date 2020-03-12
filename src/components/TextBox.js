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
    }
    
    render() {
        const maxLength = 101
        const content = this.state.content
        const charsLeft = maxLength - content.length
        return (
            <div>
                <div>
                    <Bar val={ charsLeft } max={ maxLength }/>
                    <h2 className="white">Morpheus : Unfortunately no one can be told what The Matrix is,</h2>
                    <h2 className="white">You'll have to see it for yourself...</h2>
                    <textarea 
                        className="text-box"
                        onChange={ this.handleChange }
                        placeholder="talk to Morpheus...">
                    </textarea>
                    <div>
                        <Binary content={ content }/>
                    </div>
                </div>
            </div>
        )
    }
}