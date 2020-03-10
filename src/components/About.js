import React from 'react'
import { DistortionText } from 'react-text-fun'
import Menu from './Menu'

import './styles/About.css';


export default function About() {

    return (
        <div className="about">
            
            <Menu />

            <DistortionText text="pouyan" speed={.1} fontSize={70}/>

            <div className="about-box">
                <div>
                    <div className="text">Architectural designer turned software engineer with a passion for technology, innovation and design.</div>
                </div>
                <div>
                    <div className="text">As a hobbyist, I design 2D visual experiences to trasnfer ideas and concepts. My creative approach and lateral thinking can result in simple yet innovative design solutions.</div>
                </div>
                <div>
                    <div className="text">Javascript</div>
                    <div className="text">Node.js</div>
                    <div className="text">React</div>
                    <div className="text">OOP</div>
                    <div className="text">Ruby</div>
                    <div className="text">Sinatra</div>
                    <div className="text">HTML</div>
                    <div className="text">CSS</div>
                    <div className="text">SQL</div>
                </div>
                <div>
                    <div className="text">With imaginative vision and problem solving abilities, I create diverse and flexible design layouts to response to the outlined brief.</div>
                </div>
                <div>
                    <div className="text">I seek exposure to creative code in my future role. I want to create functional and visually satisfying applications and websites.</div>
                </div>
            </div>
        </div>
    )
}