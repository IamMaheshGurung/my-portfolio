import React from 'react'
import "./about.css"
import profilePic from '../../assets/IMG_5979 (1).jpg'
import Logo from '/src/assets/helmet.svg'
const About = () => {
  return (
    <div id="about" className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={Logo} alt=""/>

      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={profilePic}  alt=""/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am learning enthuastic and active person and have been recently focusing in front end and AI development</p>
                <p>I always want to be a change in our small society in Nepal and directly or indicrectly want to be a part of development in Nepal. But first yeah, I have to do some exemplery...</p>

            </div>
            <div className='about-skills'>
                <div className='about-skill'>
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}}/>
                </div>
                <div className='about-skill'>
                    <p>Javascript</p>
                    <hr style={{width:"50%"}}/>
                </div>
                <div className='about-skill'>
                    <p>ReactJS</p>
                    <hr style={{width:"50%"}}/>
                </div>
            </div>
            <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>7+ </h1>
                    <p>YEARS OF IT SUPPORT EXPERIENCE IN MILITARY DISCIPLINE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>9+ </h1>
                    <p>YEARS OF IT SUPPORT EXPERIENCE IN MILITARY DISCIPLINE</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
