import React from 'react'
import './contact.css'
import Helmet from "../../assets/helmet.svg"
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7dd4d64a-0fea-4e2a-a5ff-d5a57f10874d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Happy to be connected</h1>
            <img src={Helmet} alt=''/>
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let's get connected</h1>
                <p>I am happy to take any projects even if its free if theres any problem regarding money, price only be the appreciation here in this page</p>
                <div className='contact-details'>
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/>
                        <p>gurungmahesh167@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=""/>
                        <p>Hakone, Kanagawa Ken Japan 🇯🇵</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=""/>
                        <p>08063367893</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='your good name please..!' name="name"/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='enter your email' name="email"/>
                <label htmlFor=''>Write your message here</label>
                <textarea name="message" rows="10" placeholder='your message please'></textarea>
                <button className='contact-submit' type='submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
