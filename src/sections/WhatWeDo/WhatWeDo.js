import React from 'react'
import './WhatWeDo.scss'


const Card = (image, title, subtitle) => {
  return (
    <div className="card">
      <div className="pic">
        <img src={image} alt="" />
      </div>

      <div className="texts">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>

    </div>
  )
}



const WhatWeDo = () => {
  return (
    <div className="whatwedo">
      <Card
        image=""
        title="Bring Technology To Your Comfortable Home"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />



    </div>
  )
}

export default WhatWeDo
