import React from 'react';
import { DistortionText } from 'react-text-fun'

function Logo() {

    return (
        <div className="logo-wrap">
            <DistortionText text="pouyan" speed={.5} fontSize={100}/>
            
            <div className="logo">
                <img src="https://cdn.pixabay.com/photo/2016/04/02/19/40/moon-1303512_960_720.png"/>
            </div>
            <input className="logo-input" type="text" placeholder="name"/>
            <input className="logo-input" step="250" type="number" placeholder="number"/>
        </div>
    )
    
}

export default Logo