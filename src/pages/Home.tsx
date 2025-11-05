import React from 'react'

import Header from '../components/home/Header'
import Hero from '../components/home/Hero'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
    </div>
  )
}

export default Home