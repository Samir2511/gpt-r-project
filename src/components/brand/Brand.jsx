import React from 'react'
import './brand.css';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

const Brand = () => {
  return (
    <div className="gpt3__header-sites">
      <div>
        <a href='https://www.google.com' >
        <img src={google} alt="google" />
        </a>
    </div>
      <div>
        <a href='https://www.slack.com' >
      <img src={slack} alt="slack" />
        </a>
        </div>
      <div>
        <a href='https://www.atlassian.com' >
      <img src={atlassian} alt="atlassian" />
        </a>
    </div>
      <div>
        <a href='https://www.dropbox.com' >
      <img src={dropbox} alt="dropbox" />
        </a>
        </div>
      <div>
        <a href='https://www.shopify.com' >
      <img src={shopify} alt="shopify" />
        </a>
    </div>
    </div>
  )
}

export default Brand