import React from 'react';
import '../App.css';
import './HeroSection.css';
import { BsDiscord } from 'react-icons/bs'

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='profile-pic-container'>
                <img src='./images/profile-01.jpg' alt='profile-pic' />
            </div>
            <div className='hero-btns'>
                <a
                    href='https://discord.gg/Km899xDQWV'
                    className='button discord-link'
                    buttonStyle='button-primary'
                    buttonSize='button-large'
                >
                    CONTACTAME POR DISCORD <BsDiscord />
                </a>
            </div>
        </div>
    );
}

export default HeroSection;