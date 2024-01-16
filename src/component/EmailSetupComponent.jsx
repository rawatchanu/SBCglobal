import React from 'react';
import './EmailSetupComponent.css';


const EmailSetupComponent = () => {
  return (
    <div className="email-setup-container">
     
      <section className='first'>
        <h2>Setting up SBC Global Email Account:</h2>
        <ol>
          <li>
            <strong>AT&T Sign-In:</strong>
            <ul>
              <li>Visit the AT&T email login page.</li>
              <li>Create a new account or sign in with existing credentials.</li>
            </ul>
          </li>
          <li>
            <strong>Setup Instructions:</strong>
            <ul>
              <li>Follow AT&T's setup instructions for SBC Global email configuration.</li>
            </ul>
          </li>
          <li>
            <strong>Email Clients (e.g., Outlook, Apple Mail):</strong>
            <ul>
              <li>Open email client.</li>
              <li>Select "Add Account" or similar option.</li>
              <li>Choose account type (IMAP or POP3).</li>
              <li>Enter SBC Global email, password, and server settings.</li>
              <li>Test account settings and configure preferences.</li>
            </ul>
          </li>
          <li>
            <strong>Webmail Access:</strong>
            <ul>
              <li>Visit AT&T webmail login page.</li>
              <li>Sign in with SBC Global email address and password.</li>
            </ul>
          </li>
          <li>
            <strong>Troubleshooting:</strong>
            <ul>
              <li>Contact AT&T support for assistance if needed.</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="first">
  <h2>How do I Reset or Recover SBCGlobal Email Password?</h2>
  <ol>
    <li className="password-reset-step">
      <strong>Visit the AT&T Password Reset Page:</strong> Go to https://www.att.com/acctmgmt/fpwd/lander.
    </li>
    <li className="password-reset-step">
      <strong>Select "Forgot Password":</strong> Click on the "Forgot Password" or "I forgot my SBCGlobal password" option.
    </li>
    <li className="password-reset-step">
      <strong>Enter User ID and Last Name:</strong> Provide your SBCGlobal email User ID and last name.
    </li>
    <li className="password-reset-step">
      <strong>Complete Verification:</strong> Complete the security verification process (CAPTCHA, security questions).
    </li>
    <li className="password-reset-step">
      <strong>Choose a Reset Method:</strong> Select a method for resetting your password (email, phone, security questions).
    </li>
    <li className="password-reset-step">
      <strong>Follow Instructions:</strong> Follow the instructions sent to your email, phone, or related to security questions.
    </li>
    <li className="password-reset-step">
      <strong>Create a New Password:</strong> Generate a strong and secure new password.
    </li>
    <li className="password-reset-step">
      <strong>Confirm New Password:</strong> Enter the new password again to confirm.
    </li>
    <li className="password-reset-step">
      <strong>Complete Process:</strong> Finalize any additional steps provided.
    </li>
    <li className="password-reset-step">
      <strong>Update Password in Email Clients:</strong> If using email clients, update the password in settings.
    </li>
  </ol>
</section>
<section className='first'>
      <h2>Sending and Receiving Issues for SBCGlobal Email:</h2>

      <section>
        <h3>Sending Issues:</h3>
        <ol>
          <li><strong>Check Internet:</strong> Ensure a stable Internet connection.</li>
          <li><strong>Verify Recipient:</strong> Confirm the correct email address.</li>
          <li><strong>Review Outbox:</strong> Check for stuck or unsent emails.</li>
          <li><strong>Size Limits:</strong> Ensure email size complies with provider limits.</li>
          <li><strong>SMTP Settings:</strong> Verify correct outgoing server settings.</li>
          <li><strong>Authentication:</strong> Confirm SMTP authentication is enabled.</li>
        </ol>
      </section>

      <section  >
        <h3>Receiving Issues:</h3>
        <ol>
          <li><strong>Inbox Quota:</strong> Check for full inbox issues.</li>
          <li><strong>Check Spam Folder:</strong> Inspect spam or junk folder for missing emails.</li>
          <li><strong>Email Filters:</strong> Review and adjust email filters.</li>
          <li><strong>Server Settings:</strong> Verify correct incoming server settings.</li>
          <li><strong>Security Software:</strong> Disable antivirus/firewall temporarily.</li>
          <li><strong>Email Forwarding:</strong> Ensure correct email forwarding settings.</li>
          <li><strong>Account Status:</strong> Confirm the account is active.</li>
          <li><strong>Contact Support:</strong> Reach out to SBCGlobal support for assistance.</li>
        </ol>
      </section>

     
    </section>
    <section className='first'>
      <h2 className="sectionHeading">What are the Common issues while using SBCGlobal Email On Windows Mail App?</h2>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Login Issues:</h3>
        <p>
          <span className="problemLabel"></span> Difficulty logging into the SBCGlobal email account through the Windows Mail app.
          <br />
          <span className="solutionLabel"></span> Double-check your username and password for accuracy. Ensure that your account settings in the Windows Mail app are correctly configured. If the issue persists, consider resetting your email password.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Configuration Problems:</h3>
        <p>
          <span className="problemLabel"></span> Incorrect email configuration settings leading to issues with sending or receiving emails.
          <br />
          <span className="solutionLabel"></span> Verify that you have entered the correct incoming and outgoing server settings. SBCGlobal email settings typically include "inbound.att.net" for incoming and "outbound.att.net" for outgoing servers. Ensure that the port numbers and security settings are accurate.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Syncing Troubles:</h3>
        <p>
          <span className="problemLabel"></span> Emails not syncing properly between the SBCGlobal account and the Windows Mail app.
          <br />
          <span className="solutionLabel"></span> Check the sync settings in the Windows Mail app. Ensure that the sync frequency is set appropriately, and try manually syncing your emails. If the problem persists, remove and re-add the SBCGlobal account to the Windows Mail app.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Email Sending/Receiving Issues:</h3>
        <p>
          <span className="problemLabel"></span> Unable to send or receive emails through the Windows Mail app.
          <br />
          <span className="solutionLabel"></span> Confirm that your internet connection is stable. Check the Outbox for any stuck emails and try resending them. Verify the email server settings and ensure that your antivirus or firewall is not blocking the email client.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Security Software Interference:</h3>
        <p>
          <span className="problemLabel"></span> Security software, such as antivirus or firewall, blocking the Windows Mail app.
          <br />
          <span className="solutionLabel"></span> Temporarily disable your security software and check if the issue persists. If the problem resolves, adjust the settings of your security software to allow the Windows Mail app to access the internet and send/receive emails.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Outdated Windows Mail App:</h3>
        <p>
          <span className="problemLabel"></span> Using an outdated version of the Windows Mail app.
          <br />
          <span className="solutionLabel"></span> Ensure that your Windows Mail app is up to date. Check for updates in the Microsoft Store and install any available updates.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">Account Lockouts:</h3>
        <p>
          <span className="problemLabel"></span> Account may get locked due to multiple failed login attempts.
          <br />
          <span className="solutionLabel"></span> If you have multiple failed login attempts, your account may get locked for security reasons. Unlock your account by following the account recovery process or by contacting the email service provider's support.
        </p>
      </section>

      <section className="commonIssuesSection">
        <h3 className="subHeading">SMTP Authentication Issues:</h3>
        <p>
          <span className="problemLabel"></span> SMTP authentication problems preventing you from sending emails.
          <br />
          <span className="solutionLabel"></span> Confirm that SMTP authentication is enabled in your email account settings. Check for typos in your username and password, and ensure that the authentication method is set to "Password" or "Normal Password."
        </p>
      </section>

      <p className="finalNote">
      If you continue to experience issues after trying these solutions, it's advisable to contact SBCGlobal customer support or your email service provider for further assistance. They can provide specific guidance based on the nature of the problem.
      </p>
    </section>
    <section className='first'>
    <h2 className="sectionHeading">Setting Up SBC Global Email on Outlook:</h2>

<ol className="setupSteps">
  <li>Open Outlook and go to "File," then select "Add Account."</li>
  <li>Choose "Manually configure server settings" and click "Next."</li>
  <li>Select "Internet Email" and click "Next."</li>
  <li>Enter your name, SBC Global email address, and account details.</li>
  <li>
    Choose IMAP or POP3, and use the following server settings:
    <ul className="serverSettings">
      <li>Incoming (IMAP): imap.mail.att.net (993 with SSL/TLS)</li>
      <li>Incoming (POP3): inbound.att.net (995 with SSL/TLS)</li>
      <li>Outgoing (SMTP): smtp.mail.att.net (465 with SSL/TLS)</li>
    </ul>
  </li>
  <li>Click "More Settings" and ensure outgoing server requires authentication.</li>
  <li>In the "Advanced" tab, set port numbers and encryption types.</li>
  <li>Test account settings and click "Finish."</li>
  <li>Close and reopen Outlook to start using your SBC Global email account.</li>
</ol>
    </section>
  <section className='first'>
  <h2 className="sectionHeading">Steps to Recover a Suspended SBC Global Email Account:</h2>

<ol className="recoverySteps">
  <li><strong>Visit AT&T Support:</strong> Go to AT&T Support.</li>
  <li><strong>Navigate to Email Section:</strong> Look for the "Email" section on the support page.</li>
  <li><strong>Select Troubleshoot & Resolve:</strong> Choose "Troubleshoot & Resolve" or a related option.</li>
  <li><strong>Find Suspended Account Information:</strong> Locate details on recovering a suspended account.</li>
  <li><strong>Follow Guided Steps:</strong> Use the provided steps or instructions to initiate recovery.</li>
  <li><strong>Contact AT&T Support:</strong> If needed, contact AT&T support directly for assistance.</li>
  <li><strong>Verify Identity:</strong> Be prepared to verify your identity with personal information.</li>
  <li><strong>Follow Support Agent Guidance:</strong> If contacting support, follow instructions from the support agent.</li>
  <li><strong>Check for AT&T Emails:</strong> Look for communications from AT&T explaining the suspension and recovery steps.</li>
  <li><strong>Update Security Measures:</strong> After recovery, enhance security by changing your password and enabling two-factor authentication.</li>
</ol>
  </section>
  <section className='first'>
  <h2 className="sectionHeading">Connecting with SBC Global Support:</h2>

<ol className="supportSteps">
  <li><strong>Visit AT&T Support:</strong> Go to AT&T Support.</li>
  <li><strong>Navigate to Email Support:</strong> Find the email support section on the page.</li>
  <li><strong>Select "Contact Us" or "Support Options":</strong> Choose the relevant option for contacting support.</li>
  <li><strong>Choose Your Issue:</strong> Select the specific issue related to your SBC Global email.</li>
  <li><strong>Guided Troubleshooting:</strong> Follow any guided troubleshooting steps provided on the support page.</li>
  <li><strong>Live Chat or Phone Support:</strong> Look for live chat or phone support options for immediate assistance.</li>
  <li><strong>Provide Account Information:</strong> Be ready to verify your identity by providing relevant account information.</li>
  <li><strong>Follow Support Agent Instructions:</strong> If using live chat or phone support, follow the instructions from the support agent.</li>
  <li><strong>Check for Email Support Options:</strong> Explore if there are specific email support options for your issue.</li>
  <li><strong>Documentation and Resources:</strong> Look for FAQs and documentation on the support page.</li>
</ol>
  </section>
  <section className='first'>
  <h2 className="sectionHeading">Elevate Your Email Experience with SBC Global:</h2>

<p className="introParagraph">
  Welcome to SBC Global Email, where cutting-edge technology meets user-friendly design to redefine your email experience. Our home page is your starting point for efficient, secure, and personalized communication.
</p>

<h3 className="whyChooseHeading">Why Choose SBC Global Email?</h3>

<ol className="whyChooseList">
  <li>
    <strong>Reliability at its Core:</strong>
    <p>Trust in a robust email service that's built on a foundation of reliability. SBC Global Email ensures your messages reach their destination promptly and securely.</p>
  </li>
  <li>
    <strong>Advanced Security Features:</strong>
    <p>Your privacy is our priority. Benefit from advanced security features that safeguard your emails and protect your sensitive information.</p>
  </li>
  <li>
    <strong>Seamless Integration:</strong>
    <p>Enjoy seamless integration across devices. Whether you're on your computer, tablet, or smartphone, SBC Global Email keeps you connected.</p>
  </li>
  <li>
    <strong>User-Friendly Interface:</strong>
    <p>Navigate with ease through our intuitive and user-friendly interface. No more hassle – just effortless email management.</p>
  </li>
</ol>
  </section>
  <section className="first">
      <h2 className="sectionHeading">Services Tailored to You</h2>

      <ol className="tailoredServicesList">
        <li>
          <strong>Personalized Email Addresses:</strong>
          <p>Create a unique identity with personalized email addresses. Choose an address that reflects your personality or brand.</p>
        </li>
        <li>
          <strong>Efficient Organization:</strong>
          <p>Streamline your inbox with powerful organizational tools. Sort, categorize, and manage your emails effortlessly.</p>
        </li>
        <li>
          <strong>Versatile Attachment Handling:</strong>
          <p>Send and receive files seamlessly with our versatile attachment handling features. No more limits on sharing important documents or memories.</p>
        </li>
        <li>
          <strong>Advanced Filtering and Sorting:</strong>
          <p>Take control of your inbox with advanced filtering and sorting options. Customize your email experience based on your preferences.</p>
        </li>
      </ol>

     
    </section>
    <section className='first'>
    <h2 className="sectionHeading">SMTP Authentication Issues:</h2>

<p className="problemSolutionParagraph">
<span className="problemLabel"></span>  SMTP authentication problems preventing you from sending emails.
  <br />
  <span className="solutionLabel"></span>  Confirm that SMTP authentication is enabled in your email account settings. Check for typos in your username and password, and ensure that the authentication method is set to "Password" or "Normal Password."
  <br />
  <p className="finalNote">
      If you continue to experience issues after trying these solutions, it's advisable to contact SBCGlobal customer support or your email service provider for further assistance. They can provide specific guidance based on the nature of the problem.
      </p>
</p>
    </section>
    <section className='first'>
    <h2>Steps to Connect with SBCGlobal Email Support Experts</h2>
        <ol>
          <li><strong>Click on "Email" or "Email Support":</strong> Look for options like "Email" or "Email Support" and click on them. This will lead you to the email support section.</li>
          <li><strong>Contact Options:</strong> Look for "Contact Us" or a similar option. This may be a phone number, live chat, or an online form.</li>
          <li><strong>Phone Support:</strong> If a phone number is provided, you can call the support line. Follow the automated prompts or speak to a representative if available.</li>
          <li><strong>Community Forums:</strong> Explore community forums where users discuss and help each other. There might be moderators or experts providing assistance.</li>
          <li><strong>Email Support:</strong> If there's an option to email support, use it to send a detailed explanation of your issue. Make sure to include relevant account information.</li>
          <li><strong>Follow Up:</strong> If your issue is not resolved immediately, ask for a case number or reference number. This will help in following up on your inquiry.</li>
        </ol>
    </section>

   
    </div>
  );
};

export default EmailSetupComponent;
