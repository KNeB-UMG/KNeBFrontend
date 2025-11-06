import React from 'react'

import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <Projects />
    </div>
  )
}

export default Home