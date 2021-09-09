import React from 'react'
import './Clients.scss'

const Clients = () => {
  return (
    <div className="clients">

      <div className="client-text">
        <h1 className="client-title">Our Beloved Clients</h1>
        <p className="client-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      <div className="client-logo">

        <div className="img-holder">
          <img src="/img/google.svg" alt="google" />
        </div>
        <div className="img-holder">
          <img src="/img/twitter.svg" alt="twitter" />
        </div>
        <div className="img-holder">
          <img src="/img/instagram.svg" alt="instagram" />
        </div>
        <div className="img-holder">
          <img src="/img/twitch.svg" alt="twitch" />
        </div>
        <div className="img-holder">
          <img src="/img/github.svg" alt="github" />
        </div>
        <div className="img-holder">
          <img src="/img/whatsapp.svg" alt="whatsapp" />
        </div>
        <div className="img-holder">
          <img src="/img/slack.svg" alt="slack" />
        </div>
        <div className="img-holder">
          <img src="/img/youtube.svg" alt="youtube" />
        </div>
      </div>

    </div>
  )
}

export default Clients
