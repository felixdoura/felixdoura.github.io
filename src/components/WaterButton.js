import React from 'react';
import './WaterButton.css';

function WaterButton(props) {
    return (
        <>
            <a className='water-button' href={props.url}>
                <span className='water-button-name'>{props.title}</span>
                <div className="liquid"></div>
            </a>
        </>
    )
}

export default WaterButton