import React, { useState } from 'react';
import homebanner from "../images/homeBanner.png";
import EmailSetupComponent from "./EmailSetupComponent"
import "./home.css";
import Footer from './Footer';


const Home = () => {
  const [full,setFull] = useState();
  return (
    <div> <div className='home'>
    <div className='home-left'>
      <h1>SBC Global Email</h1>
      <p>
        Sbcglobal.net, originally under SBC Communications and now part of AT&T, utilizes standard 
        email protocols like POP3, IMAP, and SMTP. Users can manage folders, benefit from spam 
        filtering and virus prevention, and access their accounts through the AT&T login page. 
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus optio numquam 
        rerum id atque explicabo ea porro esse sunt voluptates, 
        velit exercitationem veritatis tenetur. Nostrum eius perferendis et quidem!</p>
      <div className='h-btn'>
          <p>Read More</p>
      </div>
    </div>
    <div className='home-right'>
      <img src={homebanner} alt='homebanner'/>
  </div>
 
  </div>
   <EmailSetupComponent/>
   <Footer/>
   </div>
   
  )
}

export default Home
