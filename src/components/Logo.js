import React from 'react';
import image from './resources/logo.png'
export default function Logo() {

    return (
        <div className="logo-wrap">
            <div className="logo">
                <img src={ image } />
            </div>
        </div>
    )
    
}
