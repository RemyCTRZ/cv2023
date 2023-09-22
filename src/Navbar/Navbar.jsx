import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <header>
            <h1 className='title'>Mon C.V.</h1>
            <div className='links_container'>
                <button className='link'>À propos</button>
                <button className='link'>Compétences</button>
                <button className='link'>Projets</button>
            </div>
        </header>
    )
}