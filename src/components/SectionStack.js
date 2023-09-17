import React from 'react'
import './SectionStack.css'
import StackCard from './StackCard'

function SectionStack() {
  return (
    <>
      <div className='stack-container'>
        <div className='stack-wrapper'>
          <div className='stack-heading'>
            <h1>Stack y Tecnologías</h1>
            <p className='stack-info'>En la siguiente sección, se pueden encontrar los lenguajes, frameworks, librerías y otras tecnologías en las que tengo conocimiento y experiencia.</p>
          </div>

          <div className='stack-card-wrapper'>

            <div className='stack-card-container'>
              <StackCard
                name={"JavaScript"}
                image={process.env.PUBLIC_URL + '/images/stack-images/javascript.png'}
                url={"https://developer.mozilla.org/es/docs/Web/JavaScript"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"HTML5"}
                image={process.env.PUBLIC_URL + '/images/stack-images/html.png'}
                url={"https://developer.mozilla.org/es/docs/Web/HTML"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"CSS5"}
                image={process.env.PUBLIC_URL + '/images/stack-images/css.png'}
                url={"https://developer.mozilla.org/es/docs/Web/CSS"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"React"}
                image={process.env.PUBLIC_URL + '/images/stack-images/react.png'}
                url={"https://es.react.dev/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"VITE"}
                image={process.env.PUBLIC_URL + '/images/stack-images/vite.png'}
                url={"https://vitejs.dev/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"NextJS"}
                image={process.env.PUBLIC_URL + '/images/stack-images/next.png'}
                url={"https://nextjs.org/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"NodeJS"}
                image={process.env.PUBLIC_URL + '/images/stack-images/nodejs.png'}
                url={"https://nodejs.org/es"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"MySQL"}
                image={process.env.PUBLIC_URL + '/images/stack-images/mysql.png'}
                url={"https://www.mysql.com/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"Python"}
                image={process.env.PUBLIC_URL + '/images/stack-images/python.png'}
                url={"https://www.python.org/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"Flask"}
                image={process.env.PUBLIC_URL + '/images/stack-images/flask.png'}
                url={"https://flask.palletsprojects.com/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"SASS"}
                image={process.env.PUBLIC_URL + '/images/stack-images/sass.png'}
                url={"https://sass-lang.com/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"Bootstrap"}
                image={process.env.PUBLIC_URL + '/images/stack-images/bootstrap.png'}
                url={"https://getbootstrap.com/"}
              />
            </div>

            <div className='stack-card-container'>
              <StackCard
                name={"WordPress"}
                image={process.env.PUBLIC_URL + '/images/stack-images/wordpress.png'}
                url={"https://wordpress.com/es/"}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SectionStack