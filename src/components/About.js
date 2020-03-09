import React from 'react'
import { DistortionText } from 'react-text-fun'
import Menu from './Menu'

import './styles/About.css';


export default function About() {

    return (
        <div className="about">
            
            <Menu />

            <DistortionText text="pouyan" speed={.1} fontSize={70}/>

            <div className="about1">
                <div className="white">Architectural designer turned software engineer with a passion for technology, innovation and design. My creative approach and lateral thinking can result in simple yet innovative design solutions.</div>
            </div>
            <div className="about2">
                <div className="white">Javascript</div>
                <div className="white">Node.js</div>
                <div className="white">React</div>
                <div className="white">Ruby</div>
                <div className="white">Sinatra</div>
                <div className="white">HTML</div>
                <div className="white">CSS</div>
                <div className="white">SQL</div>
                <div className="white">OOP</div>
            </div>
            <div className="about3">
                <div className="white">As a hobbyist, I design 2D visual expressions to trasnfer a specific message.</div>
            </div>
            <div className="about4">
                <div className="white">With imaginative vision and problem solving abilities, I can create diverse and flexible design layouts to response to the outlined brief. I want to create functional and visually satisfying applications and websites. I seek exposure to design and creativity in my future role.</div>
            </div>
            <div className="about5">
                <div className="white">With imaginative vision and problem solving abilities, I can create diverse and flex.</div>
            </div>
        </div>
    )
}