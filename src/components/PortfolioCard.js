import React from 'react'
import './PortfolioCard.css'
import { BsGithub } from 'react-icons/bs'
import { ImLink } from 'react-icons/im'

function PortfolioCard(props) {
    return (
        <>
            <div className='portfolio-card'>

                <div className='card-separation'>

                    <div className='card-left-part'>
                        <img src={props.img} alt='portfolio-img' className='portfolio-img' />
                    </div>

                    <div className='card-right-part'>
                        <h1 className='card-title'>{props.title}</h1>
                        <p className='card-summary'>{props.summary}</p>
                        <a href={props.url}>
                            <ImLink />
                            {props.cta}
                        </a>
                        <a href={props.repository}>
                            <BsGithub />
                            {props.repocta}
                        </a>
                    </div>

                </div>








            </div>
        </>
    )
}

export default PortfolioCard