import React from 'react'

import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Members from '../components/home/Members'
import ContactUsForm from '../components/other/ContactUsForm'

interface HomeProps {
  onJoinClick: () => void
}

const Home: React.FC<HomeProps> = ({ onJoinClick }) => {
  return (
    <div className='home'>
      <Hero onJoinClick={onJoinClick} />
      <Projects />
      <Members />
      <ContactUsForm />
    </div>
  )
}

export default Home