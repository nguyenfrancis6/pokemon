import React from 'react'
import './Footer.css'
import bulbasaur from '../../assets/bulbasaur.png'
import insta from '../../assets/insta.png'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-top">
        <div className="footer-credit">
          <p>Made by Francis Nguyen</p>
          <img src={bulbasaur} alt="" />
        </div>
        <div className="footer-media">
          <a rel='noopener noreferrer' href="https://www.instagram.com/franciss_nguyen/" target='_blank'><img src={insta} alt="" /></a>
          <a rel='noopener noreferrer' href="https://github.com/nguyenfrancis6" target='_blank'><img src={github} alt="" /></a>
        </div>
        <hr />
      </div>
      <div className="footer-bottom">
        <p>Copyright. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer