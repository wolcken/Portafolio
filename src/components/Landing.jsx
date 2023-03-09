import React from 'react';
import '../styles/landing.css';
import arboles from '../videos/arboles.mp4';

const Landing = () => {
  return (
    <div className='containerLanding'>
      <video src={arboles} autoPlay muted loop className='video-bg' />
      <div className='bg-overlay'>
        <h2>Alfredo Ramos</h2>
        <p>Since I began my journey as a freelance developer over
          2 years ago, I have done remote work, learning projects,
          and collaborated with talented people to create digital
          products for consumer and commercial use. I am quietly
          confident, naturally curious and perpetually working to
          improve my skills, one line of code at a time.</p>
      </div>
    </div>
  )
}

export default Landing
