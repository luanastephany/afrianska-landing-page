import React from 'react'
import './Home.scss'
import Header from '../../components/Header'
import Hero from '../../sections/Hero/Hero'
import WhatWeDo from '../../sections/WhatWeDo'
import FinishedProject from '../../sections/FinishedProject'
import Clients from '../../sections/Clients'

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeDo />
      <FinishedProject />
      <Clients />
    </main>
  )
}

export default Home
