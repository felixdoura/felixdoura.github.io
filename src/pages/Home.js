import React from 'react'
import './Home.css'
import HeroSection from '../components/HeroSection'
import { BsDiscord } from 'react-icons/bs'

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='hero-buttons'>
        <a
          href='https://discord.gg/Km899xDQWV'
          className='button discord-link'
        >
          <BsDiscord />
        </a>
      </div>
    </>
  )
}

export default Home