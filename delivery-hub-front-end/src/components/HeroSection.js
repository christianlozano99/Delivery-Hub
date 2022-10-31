import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>All your tracked packages in one location</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
                    onClick={
                        console.log('hey')
                }>
                    WATCH TRAILER
                    <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;

// / new team contract role
// looking for : cisco liscenceing , willing to learn quickly
// java c++ python
// prefreed for c++ on linux
// office in raleigh going in office tuesday and thursday
// looking for new grads
// over year contract
// hourly contract
//
