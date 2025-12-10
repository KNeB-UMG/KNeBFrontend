import React from 'react'

import Header from '../reusable/Header'

import './styles/Hero.css'

interface HeroProps {
  onJoinClick: () => void
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className='hero'>
        <Header onJoinClick={onJoinClick} />
        AAA
    </section>
  )
}

export default Hero