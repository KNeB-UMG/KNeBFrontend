import React from 'react'

import logo from '../../assets/icons/KNeB_Logo.svg'

import './styles/Header.css'

interface MenuItem {
  icon?: object;
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const menuItems: MenuItem[] = [
      { label: 'Strona główna', href: '/' },
      { label: 'O nas', href: '/about'},
      { label: 'Posty', href: '/posts'},
      { label: 'Kontakt', href: '/contact'},
  ]

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="KNeB logo" />
        <p className='logo-text'> Koło Naukowe <br /> e-Biznesu </p>
      </div>
      <div className='menu'>
        {menuItems.map((item) => (
          <p key={item.label}> {item.label} </p>
        ))}
        <button className='join'> Dołącz do nas </button>
      </div>

    </header>
  )
}

export default Header