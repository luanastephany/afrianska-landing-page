import React from 'react'
import './Footer.scss'
import Button from '../Button'

const Board = ({ title, texts }) => {
  return (
    <div className="board">
      <h1 className="title">{title}</h1>
      <div className="list">
        {texts.map(text => (
          <span>{text}</span>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <section className="first-section">
        <div className="footer-texts">
          <h1 className="footer-title">Interested to work with our team?</h1>
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <Button>Lets Talk</Button>
      </section>

      <div className="divider"></div>

      <section className="second-section">
        <div className="footer-contact">
          <div className="footer-logo">
            <img src="/img/logo2.svg" alt="" />
            <h1>Afrianska</h1>
          </div>

          <p className="contact">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="contact">+62-812-7313-4321</p>
          <p className="contact">hello.afrian@gmail.com</p>
        </div>

        <Board
          title="About Us"
          texts={[
            "About",
            "What we do",
            "Project",
            "How it works with us",
          ]}
        />

        <Board
          title="Follow Us"
          texts={[
            "Instagram",
            "Facebook",
            "LinkedIn",
            "Youtube",
          ]}
        />

      </section>




    </div>
  )
}

export default Footer
