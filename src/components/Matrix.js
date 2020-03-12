import React from 'react'
import TextBox from './TextBox'
import Works from './Works'

export default function About() {
    return (
        <div>
            <Works />
            <div className="text-boxes">
                <TextBox />
            </div>
        </div>
    )
}