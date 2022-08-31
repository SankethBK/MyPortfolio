import React, { useState, useEffect } from 'react';
// import PhoneIcon from '@material-ui/icons/Phone';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import emailjs from 'emailjs-com';
import Credentials from '../../credentials.json';
import ButtonLoader from '../../widgets/ButtonLoader';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState(1);

  function validateEmail(emailAdress) {
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (showToast === true) {
      let toastTimeOut = setTimeout(() => {
        setShowToast(false);
        clearTimeout(toastTimeOut);
      }, 2000);
    }
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      name: '',
      subject: '',
      email: '',
      message: '',
    });

    let formValid = true;

    if (formData.name === '') {
      setErrors({ ...errors, name: 'Please enter your name' });
      formValid = false;
    }

    if (formData.subject === '') {
      setErrors((prevErrors) => {
        return { ...prevErrors, subject: 'Please enter a subject' };
      });
      formValid = false;
    }

    if (formData.email === '') {
      setErrors((prevErrors) => {
        return { ...prevErrors, email: 'Please enter your email' };
      });
      formValid = false;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => {
        return { ...prevErrors, email: 'Please enter valid email' };
      });
      formValid = false;
    }

    if (formData.message === '') {
      setErrors((prevErrors) => {
        return { ...prevErrors, message: 'Please enter a message' };
      });
      formValid = false;
    }

    if (!formValid) {
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        Credentials.serviceID,
        Credentials.templateID,
        e.target,
        Credentials.userID,
      )
      .then((result) => {
        console.log(result.text);
        setFormData({
          name: '',
          subject: '',
          email: '',
          message: '',
        });
        setShowToast(true);
        setToastMessage('Email Sent!');
        setToastType('success');
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.text);

        setShowToast(true);
        setToastMessage('Something went wrong');
        setToastType('failure');
        setLoading(false);
      });
  };

  return (
    <div id='contact'>
      <h3>Contact</h3>

      <div className='contact-grid'>
        <div className='contact-section-1'>
          <h3>Get In Touch</h3>

          <form id='contact-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
              className='input-field'
              type='text'
              name='name'
              value={formData['name']}
              onChange={handleInputChange}
            />
            {errors.name && <p className='error-input'>{errors.name}</p>}

            <label htmlFor='subject'>Subject</label>
            <input
              className='input-field'
              type='text'
              name='subject'
              value={formData['subject']}
              onChange={handleInputChange}
            />
            {errors.subject && <p className='error-input'>{errors.subject}</p>}

            <label htmlFor='email'>Email</label>
            <input
              className='input-field'
              type='text'
              name='email'
              value={formData['email']}
              onChange={handleInputChange}
            />
            {errors.email && <p className='error-input'>{errors.email}</p>}

            <label htmlFor='name'>Message</label>
            <textarea
              className='input-field'
              type='text'
              name='message'
              value={formData['message']}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <p className='error-input'>{errors.message}</p>}

            <ButtonLoader
              loading={loading}
              text={`Send`}
              loadingText={'Sending...'}
            />
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
                <a
                  href='https://github.com/SankethBK'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-github'></i>
                </a>
                <a
                  href='https://medium.com/@sankethbk7777'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-medium'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/sanketh-b-k-a873111a3/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a
                  href='https://discord.com/users/sankethbk7777#3010/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-discord'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div
          className={`toast ${
            toastType === 'success' ? 'toast-success' : 'toast-failure'
          }`}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Contact;
