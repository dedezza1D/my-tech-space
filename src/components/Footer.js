import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
            <div className="footer-social">
                <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="footer-newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
}

export default Footer;
