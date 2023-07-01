import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { BsDiscord } from 'react-icons/bs'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-solar.mp4' autoPlay loop muted /> */}
            <div className='hero-btns'>
                <Button
                    className='button'
                    buttonStyle='button-outline'
                    buttonSize='button-large'
                >
                    <a href='/' className='button-link'>
                        CONOZCANOS
                    </a>
                </Button>

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