import React from 'react'
import { DistortionText } from 'react-text-fun'
import Works from './Works'

import './styles/About.css';


export default function About() {
    return (
        <div>
            <Works />

            <DistortionText text="pouyan" speed={.1} fontSize={100}/>

            <div className="about-parag">
                <h2 className="white">Architectural designer turned software engineer with a passion for technology, innovation and design. My creative approach and lateral thinking can result in simple yet innovative design solutions. I particularly thrive in learning focused and productive working environment to achieve satisfaction and motivation. I have strong conceptual and objective design skills, and I'm excited to launch these transferrable skills into my software engineering career</h2>
            </div>
        </div>
    )
}
