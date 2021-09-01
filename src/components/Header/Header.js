import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/img/logo1.svg" alt="" />
      </div>

      <div className="breadcrumb">
        <p className="home">Home</p>
        <p className="blog">Blog</p>
        <p className="contact">Contact</p>
      </div>
    </header>
  )
}

export default Header
