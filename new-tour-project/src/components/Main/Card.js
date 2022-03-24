
import React from 'react'

const Card = (data) => {
    const {title,image,desc}=data;
  return (
    <div className='cards'>
        <div className='title'>
      <h2>{title}</h2>
      </div>
    <div>
        <img src={image} alt="" />
    </div>

    <div className="card-over">
        <p>
            {desc}
        </p>
    </div>

    </div>
  )
}

export default Card
