import React from 'react'

const Browse = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map(p => <div>{p}</div>)}
    </div>
  )
}

export default Browse