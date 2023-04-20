import React from 'react'
import './footer.css';
import logo from '../../assets/logo.svg';



const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the <br/> future before others</h1>
        <button type='button'>Request Early Access</button>
      </div>
      <div className="gpt3__footer-info">
        <div className='gpt3__footer-logo'>
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content">
          <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className="gpt3__footer-content">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        </div>
        <div className="gpt3__footer-content">
          <h4>Get in </h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-content-foot">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer