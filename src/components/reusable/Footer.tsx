import React from 'react'

import logo from '../../assets/icons/logo.svg'
import logoText from '../../assets/icons/logoText.svg'

import './styles/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
        <div className='content'>
            <p> Wydział Zarządzania i Nauk o Jakości ul. Morska 81-87 81-225 Gdynia tel. (58) 6901-215 </p>
            <p> Przewodniczący Oskar Kacala <br /> kneb@wznj.umg.edu.pl </p>
            <div className='scientificCirleLogos'>
                <img src={logo} aria-label='Logo' className='logo-icon' />
                <img src={logoText} aria-label='Logo Text' className='logo-text' />
            </div>
        </div>
    </footer>
  )
}

export default Footer