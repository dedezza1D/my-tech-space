import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <h2>About Page</h2>
            <p>This is the About page of my tech blog.</p>
            <Navbar />
        </div>   
    );
}

export default About;
