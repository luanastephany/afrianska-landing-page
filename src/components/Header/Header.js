import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/img/logo1.svg" alt="" />
      </div>

      <div className="breadcrumb">
        <a className="link" href="/">Home</a>
        <a className="link" href="/blog">Blog</a>
        <a className="link" href="/contact">Contact</a>
      </div>
    </header>
  )
}

export default Header
