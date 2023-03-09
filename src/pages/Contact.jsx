import React from 'react';
import '../styles/contact.css';
import facebook from '../icons/facebook.png';
import linkedin from '../icons/linkedin.png';
import instagram from '../icons/instagram.png';
import github from '../icons/github.png';
import gmail from '../icons/gmail.png';
import whatsapp from '../icons/whatsapp.png';
import letras from '../videos/letras.mp4';

const Contact = () => {
  return (
    <div className='containerContact'>
      <video src={letras} autoPlay muted loop className='dec-contact'></video>
      <div className='containerSocial'>
        <h2>Social Networks</h2>
        <section className="social">
          <a href="https://www.facebook.com/luisalfredo.ramosvelasco/">
            <img className='img' src={facebook} alt="facebook" /> Facebook
          </a>
          <a href="https://www.linkedin.com/in/alfredo-ramos-243100219/">
            <img className='img' src={linkedin} alt="facebook" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/wolcken_main/">
            <img className='img' src={instagram} alt="linkedin" /> Instagram
          </a>
        </section>
        <h2>Social Coding</h2>
        <section className="social">
          <a href="https://github.com/wolcken">
            <img className='img github' src={github} alt="github" /> Github
          </a>
        </section>
        <h2>Email</h2>
        <section className='social'>
          <span><img className='img' src={gmail} alt="gmail" /> AlfredoxD00@hotmail.com</span>
        </section>
        <h2>Phone</h2>
        <section className='social'>
          <span><img className='img' src={whatsapp} alt="gmail" /> +591 78939804</span>
        </section>
      </div>
    </div>
  )
}

export default Contact