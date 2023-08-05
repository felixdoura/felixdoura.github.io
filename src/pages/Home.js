import React from 'react'
import './Home.css'
import HeroSection from '../components/HeroSection'
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import WaterButton from '../components/WaterButton'

const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <HeroSection />
      </section>










      <WaterButton
        title='Descarga'
        url='https://www.youtube.com'
      />






    {/* -------------------- */}
    {/* SOCIAL MEDIA SECTION */}
    {/* -------------------- */}
      <section className='social-media-section'>
        <div className='social-media-buttons'>

          <div className='social-media-button'>
            <a
              href='https://discord.gg/Km899xDQWV'
              className='discord-link'
            >
              <BsDiscord />
            </a>
          </div>
          <div className='social-media-button'>
            <a
              href='https://discord.gg/Km899xDQWV'
              className='discord-link'
            >
              <BsDiscord />
            </a>
          </div>
          <div className='social-media-button'>
            <a
              href='https://twitter.com/felixdoura'
              className='twitter-link'
            >
              <BsTwitter />
            </a>
          </div>
          <div className='social-media-button'>
            <a
              href='https://discord.gg/Km899xDQWV'
              className='discord-link'
            >
              <BsDiscord />
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home