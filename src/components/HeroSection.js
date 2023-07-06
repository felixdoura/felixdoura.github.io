import React from 'react';
import '../App.css';
import './HeroSection.css';
import { BsDiscord } from 'react-icons/bs'

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-wrapper'>
                <div className='profile-pic-container'>
                    <img src={process.env.PUBLIC_URL + '/images/profile-01.jpg'} alt='profile-pic' className='profile-pic' />
                </div>
                <div className='hero-buttons'>
                    <a
                        href='https://discord.gg/Km899xDQWV'
                        className='button discord-link'
                    >
                        CONTACTAME POR DISCORD <BsDiscord />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;