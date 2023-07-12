import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-wrapper'>
                <div className='profile-pic-container'>
                    <img src={process.env.PUBLIC_URL + '/images/profile-01.jpg'} alt='profile-pic' className='profile-pic' />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;