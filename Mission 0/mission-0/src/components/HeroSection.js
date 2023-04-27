import React from 'react';
import '../App.css';
import Custombutton from './Custombutton';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' 
        autoPlay loop muted />
        <h1>SOUND STATION</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Custombutton 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET STARTED
                </Custombutton>

                <Custombutton 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
               BILLBOARD HOT 100 <i className='far fa-play-circle' />
                </Custombutton>

        

        </div>
    </div>
  );
}

export default HeroSection; 