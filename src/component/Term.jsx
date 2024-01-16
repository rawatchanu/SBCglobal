import React from 'react';
import "./term.css";
import Footer from './Footer';

const Term = () => {
  return (
   <div>
        <div className='term'>
        <div className='t-term'>
                    <h1>SBCGlobal Email Terms and Conditions</h1>
                    <p>Welcome to SBCGlobal Email! These Terms and Conditions "Terms" govern your use of the SBCGlobal
                         email services provided by us. By accessing or using our
                          email services, you agree to be bound by these Terms. 
                        If you do not agree to these Terms, please do not use our services.
                    </p>
                
        </div>

        <div >
                    <h2>Account Registration and Security</h2>
                        <p>You must provide accurate and complete information during the registration process.</p>
                        <p>You are responsible for maintaining the confidentiality of your account credentials
                             and are liable for any activity that occurs under your account.</p> 
                        <p>Notify us immediately of any unauthorized use of your account or any other breach of security.</p>                    
        </div>

        <div >
                    <h2>Acceptable Use</h2>
                    <ol>
                        <li>
                        You agree not to use SBCGlobal email services for any illegal or unauthorized purpose.
                        </li>
                        <li>
                        Do not transmit any viruses, malware, or any code of a destructive nature.
                        </li>
                        <li>
                        Do not engage in any activity that disrupts, damages, or interferes with the
                         proper functioning of our services.
                        </li>
                    </ol>
        </div>


        <div >
                    <h2>Privacy Policy</h2>
                    <ol>
                        <li>
                        Your use of SBCGlobal email is also governed by our Privacy Policy, 
                        which can be found [here] [link to your privacy policy].
                        </li>
                        <li>
                         By using our services, you consent to the collection and use 
                        of your information as described in the Privacy Policy.
                        </li>
                    </ol>
        </div>


        <div >
                    <h2>Changes to Terms</h2>
                    <ol>
                        <li>
                        We may update these Terms from time to time. Check the
                         "Last Updated" date at the top of this page for the latest version.
                        </li>
                        <li>
                        Continued use of SBCGlobal email after any changes to the Terms constitutes 
                        acceptance of those changes.
                        </li>
                    </ol>
        </div>


        <div >
                    <h2>Limitation of Liability</h2>
                    <ol>
                        <li>
                        To the fullest extent permitted by law, we shall not be liable for any direct, indirect, 
                        incidental, special, consequential, or exemplary damages.
                        </li>
                        <li>
                        We do not warrant that our email services will meet your specific requirements or
                         be uninterrupted, secure, or error-free.
                        </li>
                    </ol>
        </div>

        <div>
                    <h2>Contact Information</h2>
                    <p>If you have any questions or concerns about these Terms, please contact us
                         at [@sbcglobalemail.info].</p>
        </div>
       
      </div>  
      <Footer/>
   </div>
  )
}

export default Term