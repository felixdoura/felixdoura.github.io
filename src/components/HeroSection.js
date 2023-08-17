import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <div className='hero-wrapper'>
                    <h3 className='hero-title'>
                        Felix Doura<br/>
                        Fullstack Developer<br/>
                        React<br/>
                        UI/UX
                    </h3>
                    <div className='profile-pic-container'>
                        <img src={process.env.PUBLIC_URL + '/images/profile-01.jpg'} alt='profile-pic' className='profile-pic' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;