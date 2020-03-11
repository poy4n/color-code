import React from 'react'
import { DistortionText } from 'react-text-fun'
import Menu from './Menu'

import './styles/About.css';

export default function About() {

    return (
        <div>
            <Menu />
            <div className="about">
                
                <DistortionText text="pouyan" speed={.1} fontSize={70}/>

                <h2>colors hide secrets</h2>
                <div className="about-box">
                    <div className="box1">
                        <div className="text1">Architectural designer turned software engineer with a passion for technology, innovation and design. I have conceptual and objective design skills, and I'm excited to launch these transferrable skills into my software engineering career.</div>
                    </div>
                    <div className="box2">
                        <div className="text2">As a hobbyist, I design 2D visual experiences to trasnfer ideas and concepts. My creative approach and lateral thinking can result in simple yet innovative design solutions.</div>
                    </div>
                    <div>
                        <div className="text5">Javascript</div>
                        <div className="text6">Node.js</div>
                        <div className="text5">React</div>
                        <div className="text6">OOP</div>
                        <div className="text5">Ruby</div>
                        <div className="text6">Sinatra</div>
                        <div className="text5">HTML</div>
                        <div className="text6">CSS</div>
                        <div className="text5">SQL</div>
                    </div>
                    <div className="box3">
                        <div className="text3">With imaginative vision and problem solving abilities, I create diverse and flexible design layouts with response to the brief.</div>
                    </div>
                    <div className="box4">
                        <div className="text4">I seek exposure to creative code in my future role. I want to create functional and visually satisfying applications and websites. Growth, challenges and responsibility are the main values which enhance the ability to be a better professional.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}