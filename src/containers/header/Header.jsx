import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;



















































// import React from 'react'
// import './header.css';
// import Ai from '../../assets/ai.png';
// import google from '../../assets/google.png';
// import slack from '../../assets/slack.png';
// import atlassian from '../../assets/atlassian.png';
// import dropbox from '../../assets/dropbox.png';
// import shopify from '../../assets/shopify.png';
// import people from "../../assets/people.png"


// const Header = () => {
//   return (
//     <>
//     <div className='gpt3__header'>
//       <div className="gpt3__header-left">
//         <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
//         <p>
//           Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
//         </p>
//         <form>
//         <input type="text" placeholder='Your Email Address'/>
//         <button type='button' className='email'>Get Started</button>
//           </form>
//           <div className="gpt3__header-left-people">
//             <img src={people} alt='people' />
//             <p>1,600 people requested access a visit in last 24 hours</p>
//           </div>
//       </div>
//       <div className="gpt3__header-right">
//         <img src={Ai} alt="" />
//       </div>
//       </div>
//       <div className="gpt3__header-sites">
//         <img src={google} alt="google" />
//         <img src={slack} alt="slack" />
//         <img src={atlassian} alt="atlassian" />
//         <img src={dropbox} alt="dropbox" />
//         <img src={shopify} alt="shopify" />
//       </div>
//       </>
//   )
// }

// export default Header