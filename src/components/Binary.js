import React from 'react'
import './styles/TextBox.css';

function stringToBinary(input) {
    let characters = input.split('');
    return characters.map(function(char) {
    const binary = char.charCodeAt(0).toString(2)
    const pad = Math.max(8 - binary.length, 0);
      return '0'.repeat(pad) + binary;
    }).join(' ');
}

export default function Binary(props) {
    return (
        <div>
            <h2 className="green">{ stringToBinary(props.content) }</h2>
        </div>
    )
}