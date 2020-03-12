import React from 'react'
import WorksHome from './WorksHome' 
import { DistortionText } from 'react-text-fun';
import { sample, shuffle } from 'lodash'

import './styles/Home.css';
import './styles/Menu.css';

export default class Home extends React.Component {

    state = {
        colors: ['#DC7633', '#F4D03F', '#A569BD', '#CD6155', '#5499C7', '#52BE80', '#F0F3F4'],
        chosen: []
    }

    shuffleColors = (e) => {
         this.setState({
            chosen: shuffle(this.state.colors)
        })
    }

    assignColor = () => {
        return {
            color: sample(this.state.chosen)
        }
    }

    render() {
        return (
            <div>
                <WorksHome />
                <div className="home">
    
                    <DistortionText 
                        text="color code" 
                        speed={.03} 
                        fontSize={100} 
                        fill={'white'} 
                        fontFamily={'monospace'}
                        paddingRight={20}
                        paddingLeft={20}
                    />
    
                    <h2>
                        <span style={this.assignColor()} className="four">Love</span> of <span style={this.assignColor()} className="six">Color</span> and <span style={this.assignColor()} className="five">Code</span>
                    </h2>
                    <h2>
                        <span style={this.assignColor()} className="one">Color Code</span> is created with <a style={this.assignColor()} className="three" href="https://reactjs.org/" target="_blank">React</a>
                    </h2>
                    <h2>
                        <span style={this.assignColor()} className="six">You</span> will see lots of <span style={this.assignColor()} className="one">colors</span>
                    </h2>
                    <h2>
                        <span style={this.assignColor()} className="six">You</span> will <span style={this.assignColor()} className="five">experience</span> something new, <span style={this.assignColor()} className="three">be curious</span>
                    </h2>
                    <h2>
                        Check out other <span style={this.assignColor()} className="four">projects</span> via <span style={this.assignColor()} className="six">top-left</span> menu
                    </h2>
                    <h2>
                        The <span style={this.assignColor()} className="one">purpose</span> is to showcase <span style={this.assignColor()} className="two">skills + intrests</span> in web development
                    </h2>
                </div>
                <button className="color-btn" onClick={this.shuffleColors}>C O L O R</button>
            </div>
        )
    }
}