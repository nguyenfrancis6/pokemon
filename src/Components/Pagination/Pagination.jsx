import React from 'react'
import './Pagination.css'

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </>
  )
}

export default Pagination