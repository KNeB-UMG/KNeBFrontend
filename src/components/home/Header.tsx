import React from 'react'

import { Link, useLocation } from 'react-router-dom'

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
    </header>
  )
}

const Logo: React.FC = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='Logo' className='logo-icon' />
      <img src={logoText} alt='Logo Text' className='logo-text' />
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

export default Header