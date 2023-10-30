import React, { useEffect } from 'react'
import './SectionPortfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import PortfolioCard from './PortfolioCard'

const SectionPortfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
      <div className='portfolio-container'>

        <div className='portfolio-wrapper'>

          <div className='portfolio-heading'>
            <h1 className='portfolio-title'>Portfolio de Proyectos</h1>
            <p className='portfolio-info'>Los siguientes proyectos fueron creados parcial o totalmente por mi. Algunos son de código abierto mientras que en otros casos, el código se mantendrá oculto. No duden en contactarme por cualquier consulta sobre los proyectos.</p>
          </div>

          <div className='portfolio-card-wrapper'>

            <div className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/eduazadori.jpeg'}
                title={"Edua Zadori"}
                summary={"Este sitio web es un proyecto desarrollado previamente por otras personas en WordPress y mi trabajo fue el agregarle nuevos componentes y paginas."}
                url={"http://www.eduazadory.com/"}
                cta={"Link al Sitio Web"}
                repository={"/"}
                repocta={"Este Repositorio Es Privado"}
              />
            </div>

            <div className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/gaorfid.jpeg'}
                title={"GAOTek RFID"}
                summary={"Este sitio web fue desarrollado mediante equipos de trabajo, de los cuales me toco coordinar a 10 personas para realizar el diseño y codigo de diferentes entradas del mismo."}
                url={"https://gaorfid.com"}
                cta={"Link al Sitio Web"}
                repository={"/"}
                repocta={"Este Repositorio Es Privado"}
              />
            </div>

            <div data-aos="fade-left" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/alarmasyseg.jpeg'}
                title={"Alarmas y Seguridad"}
                summary={"Sitio web de la compañia de seguridad: Alarmas y Seguridad. Este sitio web esta creado en React, JavaScript, HTML y CSS. El equipo de trabajo estuvo compuesto por 4 personas."}
                url={"https://alarmasyseguridad.net"}
                cta={"Link al Sitio Web"}
                repository={"/"}
                repocta={"Este Repositorio Es Privado"}
              />
            </div>

            <div data-aos="fade-right" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/costasolar.jpeg'}
                title={"Costa Solar Energias Renovables"}
                summary={"Este trabajo fue realizado integramente por mi para un cliente privado en React, JavaScript, HTML y CSS. Tambien usando estilos de Bootstrap"}
                url={"http://costasolar.com.ar"}
                cta={"Link al Sitio Web"}
                repository={"https://github.com/felixdoura/costa-solar-energia"}
                repocta={"Link al Repositorio"}
              />
            </div>

            <div data-aos="fade-left" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/starship-screenshot.jpeg'}
                title={"Videojuego Naves Espaciales"}
                summary={"Este es mi primer videojuego, realizado en el motor LÖVE2D y programado en Lua. Es un juego en 2D realizado integramente por mi."}
                url={"https://felixdoura.itch.io/felix-starship-portfolio-game"}
                cta={"Link al Proyecto"}
                repository={"https://github.com/felixdoura/cs50-spaceship-finalproject"}
                repocta={"Link al Repositorio"}
              />
            </div>

            <div data-aos="fade-right" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/digitex.jpeg'}
                title={"Digitex E-Commerce"}
                summary={"Proyecto personal con fines educativos. Realizado en React, JavaScript, HTML y CSS, tiene una enorme influencia de componentes y diseños de Bootstrap."}
                url={"/"}
                cta={"Link al Proyecto"}
                repository={"https://github.com/felixdoura/digitex"}
                repocta={"Link al Repositorio"}
              />
            </div>

            <div data-aos="fade-left" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/honky-caps.jpeg'}
                title={"Honky Caps (Proyecto Final DH)"}
                summary={"Este es el proyecto final con el que cerramos la cursada de Desarrollador Fullstack en Digital House. Creado en React, HTML, CSS y JavaScript."}
                url={"/"}
                cta={"Link"}
                repository={"https://github.com/felixdoura/honkycaps-dashboard"}
                repocta={"Link al Repositorio"}
              />
            </div>

            <div data-aos="fade-right" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/mercadoliebre.jpeg'}
                title={"MercadoLiebre (Proyecto Educativo)"}
                summary={"Durante el curso de Desarrollador Fullstack en Digital House, prepare este proyecto que simula una plataforma de E-Commerce. Esta desarrollado en NodeJS, HTML, CSS y JavaScript."}
                url={"/"}
                cta={"Link"}
                repository={"https://github.com/felixdoura/MercadoLiebre"}
                repocta={"Link al Repositorio"}
              />
            </div>

            <div data-aos="fade-left" className='portfolio-card-container'>
              <PortfolioCard
                img={process.env.PUBLIC_URL + '/images/portfolio-images/calculadora.jpeg'}
                title={"Calculadora (Proyecto Educativo)"}
                summary={"Durante mis estudios desarrolle una calculadora que cumple perfectamente al hacer operaciones aritmeticas y alternado entre modo oscuro y claro. JavaScript, HTML y CSS."}
                url={"/"}
                cta={"Link"}
                repository={"https://github.com/felixdoura/calculadora-01"}
                repocta={"Link al Repositorio"}
              />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default SectionPortfolio