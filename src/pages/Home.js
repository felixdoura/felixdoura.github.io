import React from 'react'
import './Home.css'
import HeroSection from '../components/HeroSection'
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
// import WaterButton from '../components/WaterButton'
import SectionAbout from '../components/SectionAbout'
import SectionStack from '../components/SectionStack'
import SectionPortfolio from '../components/SectionPortfolio'
import SectionEducation from '../components/SectionEducation'
import SectionExperience from '../components/SectionExperience'

const Home = () => {
  return (
    <>

      {/* ------------ */}
      {/* HERO SECTION */}
      {/* ------------ */}
      <section className='hero-section'>
        <HeroSection />
      </section>

      <div className='sections'>

        {/* ------------- */}
        {/* ABOUT SECTION */}
        {/* ------------- */}
        <section className='about-section'>
          <SectionAbout />
        </section>


        {/* ------------- */}
        {/* STACK SECTION */}
        {/* ------------- */}
        <section className='stack-section'>
          <SectionStack />
        </section>


        {/* ----------------- */}
        {/* PORTFOLIO SECTION */}
        {/* ----------------- */}
        <section className='portfolio-section'>
          <SectionPortfolio />
        </section>


        {/* ------------------ */}
        {/* EXPERIENCE SECTION */}
        {/* ------------------ */}
        <section className='experience-section'>
          <SectionExperience />
        </section>


        {/* ----------------- */}
        {/* EDUCATION SECTION */}
        {/* ----------------- */}
        <section className='education-section'>
          <SectionEducation />
        </section>


      </div>



      {/* -------------------- */}
      {/* SOCIAL MEDIA SECTION */}
      {/* -------------------- */}
      <section className='social-media-section'>

        <div className='bg-social-media bg-layer'>
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
                href='https://www.linkedin.com/in/felixdoura/'
                className='linkedin-link'
              >
                <FaLinkedinIn />
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
        </div>
      </section>



    </>
  )
}

export default Home