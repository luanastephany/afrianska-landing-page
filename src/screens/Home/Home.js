import React from 'react'
import './Home.scss'
import Header from '../../components/Header'
import Hero from '../../sections/Hero/Hero'
import WhatWeDo from '../../sections/WhatWeDo'
import FinishedProject from '../../sections/FinishedProject'

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeDo />
      <FinishedProject />
    </main>
  )
}

export default Home
