import React from 'react'
import './Navbar.css'
import pokemon_logo from '../../assets/pokemon_logo.png'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img className='nav-logo-img' src={pokemon_logo} alt="" />
      </div>
      <div className='nav-menu'>
        <ul className='nav-list'>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>Browse</li>
          <li className='nav-item'>Trivia</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar