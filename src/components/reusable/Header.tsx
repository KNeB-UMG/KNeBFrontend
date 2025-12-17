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

  const smoothScrollTo = (element: HTMLElement, offset: number = 0) => {
    const startPosition = window.pageYOffset
    const targetPosition = element.offsetTop - offset
    const distance = targetPosition - startPosition
    const duration = 2000
    let start: number | null = null

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3)
    }

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const handleMenuClick = (href: string) => {
    if (href === '#contact') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const contactHeader = contactSection.querySelector('.contact-header h2')
        if (contactHeader) {
          const headerElement = contactHeader as HTMLElement
          smoothScrollTo(headerElement, 150)
        } else {
          smoothScrollTo(contactSection, 150)
        }
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