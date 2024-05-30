import React from 'react'
import './footer.css';
import footer_logo from "../../assets/helmet.svg";
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div classname="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=""/>
                <p>Well I am ex Indian Army, now a front end developer living in Japan and starting my foot as software engineer.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Mahesh Gurung. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me!</p>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
