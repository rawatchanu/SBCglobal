import React, { useState } from 'react';
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = () => {
  const [show,setShow] = useState(false);
  return (
    <>
        <div className='navbar'>

        <div className='symbol' onClick={()=> setShow(!show)}>{ show?  <IoIosCloseCircle className='icon'/>:<RxHamburgerMenu className='icon' /> }</div>

            <div className='logo'>
                <h1>SBC Global email</h1>
            </div>
            
            <ul className='navlinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/privacy">Privacy & Policy</Link></li>
                <li><Link to="/term">Term & Condition</Link></li>
                <li><Link to="/blog">Blog</Link></li>
        
            </ul>

            

        </div>
        <div>
        
            {
                show &&
             <div className='m-links' >   
            <ul >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/privacy'>Privacy & Policy</Link></li>
                <li><Link to="/term">Term & Condition</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </ul>
            </div>    
            }
        
        </div>
    </>
  )
}

export default Sidebar