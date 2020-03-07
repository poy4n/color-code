import React from 'react'

import './styles/Languages.css';


const languages = [
    {
        language: 'Ruby',
        year: 1995
    },
    {
        language: 'JS',
        year: 1995
    },
    {
        language: 'PHP',
        year: 1995
    },
    {
        language: 'Java',
        year: 1995
    },
    {
        language: 'Scala',
        year: 2004
    },
    {
        language: 'Elixir',
        year: 2011
    },
    {
        language: 'Crystal',
        year: 2014
    },
    {
        language: 'Haskell',
        year: 1990
    },
    {
        language: 'C#',
        year: 2000
    },
    {
        language: 'Go',
        year: 2009
    },
    {
        language: 'C++',
        year: 1985
    },
    {
        language: 'Python',
        year: 1990
    },
]


export default function Select() {

    return (
        <div className="languages-box">
            { languages.map(language => <div className="languages">{ language.name }</div>) }
        </div>
    )
}
