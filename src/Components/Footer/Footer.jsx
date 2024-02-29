import React from 'react'
import './Footer.css'
import bulbasaur from '../../assets/bulbasaur.png'
import linkedin from '../../assets/linkedin.png'
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
          <a rel='noopener noreferrer' href="https://www.linkedin.com/in/francis-nguyen-0a6902208/" target='_blank'><img src={linkedin} alt="" /></a>
          <a rel='noopener noreferrer' href="https://github.com/nguyenfrancis6/pokemon" target='_blank'><img src={github} alt="" /></a>
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