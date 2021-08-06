import React from 'react';
// import PhoneIcon from '@material-ui/icons/Phone';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import './Contact.css';

function Contact() {
  return (
    <div id='contact'>
      <h3>Contact</h3>

      <div className='contact-grid'>
        <div className='contact-section-1'>
          <h3>Get In Touch</h3>

          <form id='contact-form'>
            <label htmlFor='name'>Name</label>
            <input className='input-field' type='text' name='name' />

            <label htmlFor='subject'>Subject</label>
            <input className='input-field' type='text' name='subject' />

            <label htmlFor='email'>Email</label>
            <input className='input-field' type='text' name='email' />

            <label htmlFor='name'>Message</label>
            <textarea
              className='input-field'
              type='text'
              name='message'
            ></textarea>

            <input className='submit-btn' type='submit' value='Send' />
          </form>
        </div>

        <div className='contact-section-2'>
          <div className='contacts-container'>
            <div className='contact-container'>
              <div className='contact-icon-container'>
                <PhoneOutlinedIcon className='contact-icon' />
              </div>
              <div className='contact-details'>
                <h4 className='contact-type'>Phone:</h4>
                <p className='contact-detail'>+91 9108399678</p>
              </div>
            </div>

            <div className='contact-container'>
              <div className='contact-icon-container'>
                <EmailOutlinedIcon className='contact-icon' />
              </div>
              <div className='contact-details'>
                <h4 className='contact-type'>Email:</h4>
                <p className='contact-detail'>sankethbk7777@gmail.com</p>
              </div>
            </div>

            <div className='contact-links-container'>
              <h3>Find me at</h3>
              <div className='contact-links'>
                <a href='https://github.com/SankethBK'>
                  <i className='fab fa-github'></i>
                </a>
                <a href='https://www.instagram.com/sankethbk7777/'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='https://www.linkedin.com/in/sanketh-b-k-a873111a3/'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a href='https://discord.com/users/sankethbk7777#3010/'>
                  <i className='fab fa-discord'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
