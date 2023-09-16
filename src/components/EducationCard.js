import React from 'react'
import './EducationCard.css'

function EducationCard(props) {
  return (
    <>
        <div className='education-card'>
            <div className='education-card-content'>
                <div className='education-card-titles'>
                    <h3>{props.title}</h3>
                    <p>{props.school}</p>
                    <p>{props.date}</p>
                </div>
                <div className='education-links'>
                    <img src={props.edimg} alt='school-img' className='school-img' />
                    <a href={props.certificateurl}>{props.certificatename}</a>
                </div>

            </div>


        </div>
    
    
    </>
  )
}

export default EducationCard