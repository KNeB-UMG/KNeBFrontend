import React, { useContext } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

import themes from '../../styles/themes/themes'

// options icons as React components
import HomeIcon from '../../assets/icons/header/home.svg?react'
import PostsIcon from '../../assets/icons/header/posts.svg?react'
import EventsIcon from '../../assets/icons/header/calendar.svg?react'
import ProjectsIcon from '../../assets/icons/header/projects.svg?react'

// logo icons (nieużywane na razie)
import logo from '../../assets/icons/logo.svg'
import logoText from '../../assets/icons/logoText.svg'

import './styles/Header.css'

interface Option {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  alt: string
  text: string
  href: string
}

const Header: React.FC = () => {
  const options: Option[] = [
    { Icon: HomeIcon, alt: 'Home page icon', text: 'Strona główna', href: '/' },
    { Icon: PostsIcon, alt: 'Posts icon', text: 'Posty', href: '/posts' },
    { Icon: EventsIcon, alt: 'Events icon', text: 'Wydarzenia', href: '/events' },
    { Icon: ProjectsIcon, alt: 'Projects icon', text: 'Projekty', href: '/projects' },
  ]

  return (
    <header>
        <Logo />
        {options.map((option) => (
          <Option key={option.href} Icon={option.Icon} alt={option.alt} text={option.text} href={option.href} />
        ))}
        <ThemeToggle />
    </header>
  )
}

const Logo: React.FC = () => {
  return (
    <div className='logo'>
      <img src={logo} aria-label='Logo' className='logo-icon' />
      <img src={logoText} aria-label='Logo Text' className='logo-text' />
    </div>
  )
}

const Option: React.FC<Option> = ({ Icon, alt, text, href }) => {
  const isActive = useLocation().pathname === href

  return (
    <Link to={href} className={`option ${isActive ? 'active' : ''}`}>
      <Icon role='img' aria-label={alt} className='option-icon' />
      <p className={`option-text ${isActive ? 'active' : ''}`}>{text}</p>
    </Link>
  )
}

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      type='button'
      aria-label='Przełącz motyw'
      className='theme-toggle'
      onClick={toggleTheme}
    >
      {theme === themes.lightTheme ? (
        // moon icon (show when light theme is active)
        <svg className='theme-toggle-icon' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fill="currentColor"/>
        </svg>
      ) : (
        // sun icon (show when dark theme is active)
        <svg className='theme-toggle-icon' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V2M12 22V20M4.93 4.93L3.51 3.51M20.49 20.49L19.07 19.07M4 12H2M22 12H20M4.93 19.07L3.51 20.49M20.49 3.51L19.07 4.93M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}

export default Header