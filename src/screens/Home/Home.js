import React from 'react'
import './Home.scss'
import Header from '../../components/Header'
import Hero from '../../sections/Hero/Hero'
import WhatWeDo from '../../sections/WhatWeDo'

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeDo />
    </main>
  )
}

export default Home
