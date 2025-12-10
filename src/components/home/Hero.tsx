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
      <div className='hero-content'>
        <div className='hero-text'>
          <h1 className='hero-title'>
            Koło Naukowe <br />
            <span className='hero-title-accent'>e-Biznesu</span>
          </h1>
          <p className='hero-subtitle'>
            Uniwersytet Morski w Gdyni
          </p>
          <p className='hero-description'>
            Rozwijamy pasję do biznesu cyfrowego, tworzymy innowacyjne projekty 
            i budujemy przyszłość e-commerce. Dołącz do nas i odkryj świat 
            nowoczesnego biznesu w środowisku akademickim.
          </p>
          <div className='hero-buttons'>
            <button className='hero-button primary' onClick={onJoinClick}>
              Dołącz do nas
            </button>
            <button 
              className='hero-button secondary'
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Skontaktuj się
            </button>
          </div>
        </div>
        <div className='hero-visual'>
          <div className='hero-card'>
            <div className='card-icon'>🚢</div>
            <h3>Morska Tradycja</h3>
            <p>Połączenie tradycji morskiej z nowoczesnym biznesem</p>
          </div>
          <div className='hero-card'>
            <div className='card-icon'>💼</div>
            <h3>Praktyczne Projekty</h3>
            <p>Realne doświadczenie w e-commerce i cyfrowym biznesie</p>
          </div>
          <div className='hero-card'>
            <div className='card-icon'>🌊</div>
            <h3>Innowacje</h3>
            <p>Wspólnie tworzymy przyszłość biznesu cyfrowego</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero