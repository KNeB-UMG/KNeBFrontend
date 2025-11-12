import React from 'react'

import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Management from '../components/home/Management'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <Projects />
      <Management />
    </div>
  )
}

export default Home