import React from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Want to help?</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <i class='fas fa-box'/>&nbsp;DH
                        </Link>
                    </div>
                    <small class='website-rights'>Delivery Hub © 2022</small>
                    <div class='social-icons'>
                        <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i class='fab fa-instagram'/>
                        </Link>
                        <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                            <i class='fab fa-youtube'/>
                        </Link>
                        <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                            <i class='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
