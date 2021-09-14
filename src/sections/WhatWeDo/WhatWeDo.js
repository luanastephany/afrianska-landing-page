import React from 'react'
import './WhatWeDo.scss'
import InvisibleBtn from '../../components/InvisibleBtn';
import { FaArrowRight } from 'react-icons/fa'


const Card = ({ image, title, subtitle }) => {
  return (
    <div className="card">
      <div className="pic">
        <img src={image} alt="" />
      </div>

      <div className="texts">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <InvisibleBtn>
        <span>Learn More</span>
        <FaArrowRight />
      </InvisibleBtn>

    </div>
  )
}

const WhatWeDo = () => {
  return (
    <div className="whatwedo">

      <div className="column">
        <h1 className="bigtitle">What we do to help our client grow in digital era</h1>

        <Card
          image="/img/toy1.svg"
          title="Bring Technology To Your Comfortable Home"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

      <div className="column">
        <Card
          image="/img/toy2.svg"
          title="Make Your business To Be Better Famous In Internet"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Card
          image="/img/toy3.svg"
          title="Build Your Digital Product That Suitable For Your Need"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>




    </div>
  )
}

export default WhatWeDo
