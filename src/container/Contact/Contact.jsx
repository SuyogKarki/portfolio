import React, { useRef, useContext } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { SiGooglemessages } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import './Contact.scss';
import { NotificationContext } from '../../components/NotificationProvider/NotificationProvider';
import { v4 } from 'uuid';

function Contact() {
  const dispatch = useContext(NotificationContext);
  const validateEmail = e => {
    var email = form.current.email.value;
    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    if (validateEmail()) {
      emailjs.sendForm('service_a5np3xc', 'template_3ul22ml', form.current, 'cDpCaf4uj69ZwAsWd').then(
        result => {
          console.log(result.text);
          dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
              id: v4(),
              type: 'Success',
              message: 'Message sent successfully',
            },
          });
        },
        error => {
          console.log(error.text);
        }
      );
      form.current.reset();
    } else {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: v4(),
          type: 'Error',
          message: 'Please enter a valid email address',
        },
      });
    }
  };

  return (
    <div className='app__contact'>
      <div className='app__contact-title'>
        <h1>Get in touch</h1>
        <h4>
          If you If you wanna get in touch, discuss about project <br />
          collaboration or just have a idle talk, fill up the form below.
        </h4>
      </div>
      <div className='app__contact-form'>
        <form onSubmit={sendEmail} ref={form}>
          <div className='upper-row'>
            <div className='input-group'>
              <input type='text' name='name' id='name' required autoComplete='off' />
              <label htmlFor='name'>
                <BsFillPersonFill /> Enter your name
              </label>
            </div>
            <div className='input-group'>
              <input type='text' name='email' id='email' required autoComplete='off' />
              <label htmlFor='email'>
                <HiMail /> Enter your email
              </label>
            </div>
          </div>
          <div className='lower-row'>
            <div className='input-group'>
              <input name='message' id='message' type='text' autoComplete='off' />
              <label htmlFor='message'>
                <SiGooglemessages /> Enter you message
              </label>
            </div>
            <button type='submit' onClick={sendEmail}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='app__contact-footer'> © 2022 Suyog Karki</div>
    </div>
  );
}

export default Contact;
