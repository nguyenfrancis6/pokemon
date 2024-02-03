import React from 'react'
import './Pagination.css'

const Pagination = ( {goToNextPage, goToPrevPage}) => {
  return (
    <>
      <button onClick={goToPrevPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </>
  )
}

export default Pagination