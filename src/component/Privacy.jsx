import React from 'react';
import "./privacy.css";
import Footer from './Footer';

const Privacy = () => {
  return (
    <div>
        <div className='privacy'>
                <div className='p-privacy'>
                    <h1>Privacy Policy</h1>
                    <h4>Privacy Policy for sbcglobalemail Email Service</h4>
                    <p>At sbcglobal email-info, we are committed to protecting the privacy and security of your
                         personal information. This Privacy Policy outlines our practices regarding the collection, use,
                         and disclosure of your information when you use our email service.
                    </p>
                </div>

                <div >
                    <h2>How We Use Your Information</h2>
                    
                    
                    <ol>
                        <li>
                            <strong>Service Provision:</strong><br></br>
                            We use your information to provide and improve our email service, 
                            including troubleshooting, data analysis, and personalized content delivery.
                        </li>
                        <li>
                            <strong>Communication:</strong><br></br>
                            We may use your email address to send important notices, 
                            updates, and information related to our service.
                        </li>
                        <li>
                            <strong>Security and Fraud Prevention:</strong><br></br>
                            Your information is used to enhance the security 
                            of our service and prevent unauthorized access or fraudulent activities.
                        </li>
                    </ol>
                </div>

                <div >
                    <h2>Information We Collect</h2>
                   
                    
                    <ol>
                        <li>
                            <strong>Account Information:</strong><br></br>
                            When you create an account we may collect information such as your name, 
                            email address, and any other information necessary for account setup.
                        </li>
                        <li>
                            <strong>Usage Data:</strong><br></br>
                            We collect data on how you interact with our email service, including 
                            information on sent and received emails, attachments, and other usage patterns.
                        </li>
                        <li>
                            <strong>Device and Log Information:</strong><br></br>
                            We may collect information about the device you use to access our service,
                            including IP address, browser type, and operating system.
                        </li>
                    </ol>
                </div>


                <div >
                    <h2>Information Sharing</h2>
                    <ol>
                        <li>
                            <strong>Third-Party Service Providers:</strong><br></br>
                            We may share your information with third-party
                             service providers who assist us in delivering our email service.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong><br></br>
                            We may disclose your information in response to legal 
                            requests or to comply with applicable laws and regulations.
                        </li>
                    </ol>
                </div>


                <div >
                    <h2>Your Choices</h2>
                    <ol>
                        <li>
                            <strong>Account Settings:</strong><br></br>
                            You can review and update your account information through your account settings.
                        </li>
                        <li>
                            <strong>Communication Preferences:</strong><br></br>
                            You have the option to manage your communication 
                            preferences, including opting out of non-essential emails.
                        </li>
                    </ol>
                </div>

                <div >
                    <h2>Data Security</h2>
                        <p>We employ industry-standard security measures to protect
                         your information from unauthorized access, disclosure, alteration, and destruction.</p>
                </div>


                <div >
                    <h2>Changes to this Privacy Policy</h2>
                        <p>We reserve the right to update this Privacy Policy to reflect changes in our practices and services. 
                        We will notify you of any significant changes through email or our website.</p>
                </div>


                <div >
                    <h2>Contact Us</h2>
                        <p>If you have any questions or concerns about our privacy practices, please contact us
                             at [contact@email.com].</p>
                        <p>By using our email service, you agree to the terms outlined in this Privacy Policy.</p>                
                </div>

                
        </div>
        <Footer/>
    </div>
  )
}

export default Privacy