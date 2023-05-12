import React from 'react'
import './Card.scss'

const Card = ({CardTitle,CardDescription}) => {
    return (
        <div className='card'>
            <div className='card-pic'></div>
            <div className='card-info'>
                <div className='card-title'>{CardTitle}</div>
                <div className='card-description'>{CardDescription}</div>
            </div>
        </div>
    )
}

export default Card