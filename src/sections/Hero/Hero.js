import React from 'react'
import Button from '../../components/Button/Button'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">New Automation Tool for Your Home</h1>
        <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
        <Button>See Our Project</Button>
      </div>
    </div>
  )
}

export default Hero
