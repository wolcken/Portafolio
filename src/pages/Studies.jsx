import React from 'react';
import '../styles/studies.css';
import udabol from '../images/udabol.jpg';

const Studies = () => {
    return (
        <div className='containerStudies'>
            <div className="bg-study">
                {/* <h2>Alfredo Ramos</h2>
                <p>Since I began my journey as a freelance developer over
                    2 years ago, I have done remote work, learning projects,
                    and collaborated with talented people to create digital
                    products for consumer and commercial use. I am quietly
                    confident, naturally curious and perpetually working to
                    improve my skills, one line of code at a time.</p> */}

                <h2>"Ingenieria de Sistemas"</h2>
                <img src={udabol} alt="logoUdabol" />
                <h4>University</h4>
                <p>Universidad de Aquino Bolivia - UDABOL</p>

                <h2>Postgraduate</h2>
                <p>Diplomaed - Software Development - UDABOL</p>
                <p>Diplomaed - Full Stack Developer - USIP</p>

                <h2>Certificate</h2>
                <h4>Conferences</h4>
                <p>Hyperconverged Infrastructure and Green Infrastructure - Udabol</p>
                <p>International Computer Science "Technological Infrastructure for Digital Hospitals" - Udabol</p>
                <p>Computer Science International - Udabol</p>
                <p>International Computer Science "Digital Transformation" - Udabol</p>
                <p>Digital marketing platforms & social media business - UTB</p>

                <h4>Online Education Platforms</h4>
                <p>Consuming REST APIs with JavaScript - Platzi</p>
                <p>Rest APIs with Laravel - Platzi</p>
                <p>DOM manipulation - Platzi</p>
                <p>Introduction to React.js - Platzi</p>
                <p>Frontend Developer - Platzi</p>
            </div>
        </div>
    )
}

export default Studies