import React from 'react'

import logo from '../../assets/icons/KNeB_Logo.svg'

import './styles/Header.css'

interface MenuItem {
  icon?: object;
  label: string;
  href: string;
}

interface HeaderProps {
  onJoinClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const menuItems: MenuItem[] = [
      { label: 'Strona główna', href: '/' },
      { label: 'O nas', href: '/about'},
      { label: 'Posty', href: '/posts'},
      { label: 'Kontakt', href: '#contact'},
  ]

  const handleMenuClick = (href: string) => {
    if (href === '#contact') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="KNeB logo" />
        <p className='logo-text'> Koło Naukowe <br /> e-Biznesu </p>
      </div>
      <div className='menu'>
        {menuItems.map((item) => (
          <p key={item.label} onClick={() => handleMenuClick(item.href)}> {item.label} </p>
        ))}
        <button className='join' onClick={onJoinClick}> Dołącz do nas </button>
      </div>

    </header>
  )
}

export default Header