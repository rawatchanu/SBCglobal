import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <>
          <div className='footer'>
              <div className='foot'>
                <div>
                  <h2>@sbcglobalemail</h2>
                  <p>Our website is committed to delivering high-quality information for general use. 
                    Our primary goal is to provide our users with relevant and reliable information.</p>
                </div>
                <div>
                      <h4>Service</h4>
                      <ul>
                          <li>Email Setup</li>
                          <li>Verify Troubleshoot</li>
                          <li>AT&T Recovery</li>
                          <li>Internet Issues</li>
                          <li>Configure Outlook</li>
                          <li>Hacking Suspension</li>
                      </ul>
                </div>
                <div>
                      <h4>Menu</h4>
                      <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/privacy'>Privacy & Policy</Link></li>
                        <li><Link to="/term">Term & Condition</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                      </ul>
                </div>
              </div>  
          </div>
    </>
  )
}

export default Footer