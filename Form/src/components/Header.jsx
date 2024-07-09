import React from 'react'
import Navigation from './Navigation.module.css'

function Header() {
  return (
    <nav className={`${Navigation.navigation} container`}>
        <div className='logo'>
            <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Header