import React from 'react'

import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Management from '../components/home/Management'
import SocialMedia from '../components/home/SocialMedia'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <Projects />
      <Management />
      <SocialMedia />
    </div>
  )
}

export default Home