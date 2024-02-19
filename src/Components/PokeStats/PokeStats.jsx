import React from 'react'
import './PokeStats.css'

const PokeStats = () => {
  return (
    <div className='container'>
      <div className="container-left">
        <img src="" alt="" />
      </div>
      <div className="container-right">
        <p>Name</p>
        <p>Type</p>
        <p>Abilities</p>
        <p>Stats</p>
        <ul>
          <li>HP: </li>
          <li>Atk: </li>
          <li>Def: </li>
          <li>SpAtk: </li>
          <li>SpDef: </li>
          <li>Spd: </li>
        </ul>
      </div>
    </div>
  )
}

export default PokeStats