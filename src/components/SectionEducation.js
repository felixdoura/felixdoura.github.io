import React from 'react'
import './SectionEducation.css'
import EducationCard from './EducationCard'

function SectionEducation() {
  return (
    <>
      <div className='education-container'>

        <div className='education-wrapper'>
          <div className='education-heading'>
            <h1>Educación, Cursos y Certificados</h1>
            <p>Esta sección está dedicada a presentar mis estudios en sistemas informáticos, programación y desarrollo web.</p>
          </div>

          <div className='education-cards'>

            <div className='education-card-container'>
              <EducationCard
                title={"Fullstack Web Developer"}
                school={"Digital House - Buenos Aires, Argentina"}
                date={"2022 - 2023"}
                certificateurl={process.env.PUBLIC_URL + "/images/certificates/Certificado-Desarrollador-Fullstack-Digita-House-Felix-Doura.pdf"}
                certificatename={"Ver Certificado"}
                edimg={process.env.PUBLIC_URL + "/images/education-images/digital-house-logo.jpeg"}
              />
            </div>

            <div className='education-card-container'>
              <EducationCard
                title={"Ciencias de la Computacion 50"}
                school={"Harvard University - Boston, Estados Unidos"}
                date={"2023"}
                certificateurl={process.env.PUBLIC_URL + "/images/certificates/CS50x.pdf"}
                certificatename={"Ver Certificado"}
                edimg={process.env.PUBLIC_URL + "/images/education-images/harvard-logo.png"}
              />
            </div>

            <div className='education-card-container'>
              <EducationCard
                title={"Responsive Web Design"}
                school={"FreeCodeCamp - Buenos Aires, Argentina"}
                date={"2023"}
                certificateurl={process.env.PUBLIC_URL + "/images/certificates/Responsive Web Design Certificate.pdf"}
                certificatename={"Ver Certificado"}
                edimg={process.env.PUBLIC_URL + "/images/education-images/freecodecamp-logo.jpeg"}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SectionEducation