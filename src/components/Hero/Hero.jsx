import React from 'react'
import './hero.css'
import profilePic from '../../assets/IMG_5979 (1).jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profilePic} alt="profile image" />
      <h1><span>I'm Mahesh Gurung,</span> Front End Developer based in 🇯🇵 Japan</h1>
      <p> I am a former Indian Army with more than seven years of IT services and leadership skills in Indian Army</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>

      </div>
    </div>
  )
}

export default Hero
