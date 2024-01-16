import React from 'react';
import "./post.css";
import Pcard from "../images/pcard.jpg";
import Pcard2 from "../images/pcard2.jpg";
import Pcard3 from "../images/pcard3.jpg";
import Pcard4 from "../images/pcard4.jpg";
import Footer from './Footer';

const Post = () => {
  return (
    <div>
    <div className='post'>
        
        <div className='post-left'>
        <div className='post-left-1'>
            <h1>Find Useful Tips In Our Blog Posts</h1>
            <p>Our blog post offers practical advice that's easy to implement in your daily routine.</p>
        </div>
            
        </div>

        <div className='veri-line'></div>

        <div className='post-right'>

            <div className='pcard'>
                <div className='img'>
                    <img src={Pcard} alt='pic'/>
                </div>
                <div className='content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>The Role of Managed Security Services in Today’s Threat Landscape</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            <div className='pcard' >
                <div className='img'>
                    <img src={Pcard2} alt='pic'/>
                </div>
                <div className='content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>AI and Machine Learning in Cybersecurity Enhancing Your Defenses</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            <div className='pcard'>
                <div className='img' >
                    <img src={Pcard3} alt='pic'/>
                </div>
                <div className='content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>Endpoint Security Fortify Your Devices with Our Cybersecurity Solutions</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            <div className='pcard'>
                <div className='img'>
                    <img src={Pcard4} alt='pic'/>
                </div>
                <div className='content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>Data Breaches How Our Cybersecurity Services Can Prevent Catastrophe</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </div>  
       
    </div>
    <Footer/>
    </div>
  )
}

export default Post