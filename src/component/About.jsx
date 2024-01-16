import React from 'react';
import "./about.css";
import img from "../images/about.jpg";
import Footer from './Footer';

const About = () => {
  return (
    <div>
        <div className='about'>
            <div className='a-box'>
                <div className='a-image'>
                    <img src={img} alt="pic" />
                </div>
                <div className='a-content'>
                    <h2>About Us</h2>
                    <p>Sbcglobal.net, originally under SBC Communications and now part of AT&T, utilizes standard email
                         protocols like POP3, IMAP, and SMTP. Users can manage folders, benefit from spam filtering and
                          virus prevention, and access their accounts through the AT&T login page. Compatibility with 
                          email clients and a user-friendly webmail interface enhances accessibility, allowing tasks like
                           sending/receiving emails and organizing contacts and folders.
                         The service offers a secure, organized, and versatile email experience.
                    </p>

                </div>
            </div>

            <div className='a-con-box box1'>
                    <h3>Here are some of the things that SBC Global customer support can help you with:</h3>
                    <ul>
                        <li>Resetting your password</li>
                        <li>Troubleshooting login problems</li>
                        <li>Managing your email account settings</li>
                        <li>Dealing with spam and viruses</li>
                        <li>Recovering lost or deleted emails</li>
                        <li>Upgrading your email account</li>
                    </ul>
                    <p>Apart from the email support number, SBC Global provides several different options for account
                         assistance. Email, social media, or live chat can reach customer service. 
                        The SBC Global website has informative articles and videos as well.
                    </p>
            </div>

            <div className='a-con-box box2'>
                    <h3>Here are some tips for getting the most out of SBC Global customer support:</h3>
                    <p>Be ready to provide the customer service representative with your account information, which includes your email address and phone number.
                        Carefully state the problem you are experiencing. If you can provide the customer service representative with more details, they will be able to help you more efficiently.
                    </p>
                    <p>The customer service representatives are there to help, even though they could be
                         occupied with other customers.</p>
            </div>

            <div className='a-con-box box3'>
                    <h3>Here are some common SBC Global email problems and their solutions:</h3>
                    <ul>
                        <li>
                            <strong>Problem:</strong> : I can't log in to my SBC Global email account. 
                            <br></br>
                            <strong>Solution:</strong> There are a few possible reasons why you may not be able to log in to your SBC Global email account. First, make sure that you are entering the correct email address and password. 
                            If you are still having trouble logging in, you can try resetting your password.
                        </li>
                        <li>
                            <strong>Problem:</strong> : I'm receiving a lot of spam emails.<br></br>
                            <strong>Solution:</strong> SBC Global offers several spam filtering features that can help you 
                            reduce the amount of spam you receive. You can enable these features by logging in to your 
                            SBC Global email account and clicking on the "Settings" tab.
                        </li>
                        <li>
                            <strong>Problem:</strong> Accidentally deleted important email.<br></br>
                            <strong>Solution:</strong>SBC Global offers a feature called the "Trash" folder.
                             When you delete an email, it is moved to the Trash folder.
                             You can recover deleted emails from the Trash folder for up to 30 days.
                        </li>
                        <li>
                            <strong>Problem:</strong>I need to upgrade my email account.<br></br>
                            <strong>Solution:</strong> You can upgrade your SBC Global email account by logging in to your
                             account and clicking on the "Upgrade" tab. There are a variety of upgrade options available,
                             so you can choose the one that best suits your needs.
                        </li>
                    </ul>
                    <p>Please feel free to contact customer care for assistance if you are experiencing any additional
                         issues with your SBC Global email account. Because of their expertise and experience, customer
                         care agents can help you find an immediate and efficient fix to your issue.</p>
            </div>

            <div className='a-con-box box4'>
                    <h3>Here are some additional tips for getting help withyour SBC Global email account:</h3>
                    <p>You can attempt contacting customer service via email or live chat if you are unable to do so over
                         the phone. The SBC Global website has informative articles and videos as well. You might attempt 
                         reaching
                         out to SBC Global via social media if you are still unable to receive assistance.                   </p>
                    <p>SBC Global is dedicated to offering outstanding customer support to its clients. You can get 
                        assistance from the customer support agents with any issues you might be having with your account. 
                        Therefore, do not hesitate to contact SBC Global customer care if you need assistance.
                    </p>
            </div>

            <div className='a-con-box box5'>
                <h3>At our company, we focus on delivering unparalleled user experiences:</h3>
                <ul>
                    <li>
                        <strong>Immersive Fan Experience:</strong><br></br>
                        We create interfaces that immerse fans in the sport's world with live updates,
                         interactive content, and fan forums, building a vibrant community.
                    </li>

                    <li>
                        <strong>Gamification Elements:</strong><br></br>
                        Our apps incorporate elements like details, predictions, and reward systems, 
                        ensuring an engaging and enjoyable user journey.
                    </li>

                    <li>
                        <strong>Virtual Viewing Experience:</strong><br></br>
                        We offer virtual viewing experiences via live streaming, virtual reality 
                        integration, and augmented reality enhancements, bringing the game to fans' 
                        devices.
                    </li>
                </ul>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default About