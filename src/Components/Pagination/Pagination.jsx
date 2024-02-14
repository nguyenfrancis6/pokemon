import React from 'react'
import './Pagination.css'
import arrow from '../../assets/arrow.png'

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <>
    <div className='buttons'>
      {goToPrevPage && <button className='prev-button' onClick={goToPrevPage}><img src={arrow} alt="" /></button>}
      {goToNextPage && <button className='next-button' onClick={goToNextPage}><img className='forward-arrow' src={arrow} alt="" /></button>}
    </div>
    </>
  )
}

export default Pagination