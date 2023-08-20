import React from 'react'
import './StackCard.css'

function StackCard(props) {
    return (
        <>
            <a href={props.url} className='stack-card'>

                <div className='stack-card-content'>
                    <div className='stack-img-container'>
                        <img src={props.image} alt='stack-img' className='stack-image' />
                    </div>
                    <h3 className='stack-item-name' dangerouslySetInnerHTML={{ __html: props.name }}></h3>
                </div>

            </a>


        </>
    )
}

export default StackCard