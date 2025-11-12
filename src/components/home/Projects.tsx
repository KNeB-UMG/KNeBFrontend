import React from 'react'

import Title from '../reusable/Title'

import './styles/Projects.css'

interface Project {
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Projekt 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Projekt 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Projekt 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Projekt 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Projekt 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Projekt 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  return (
    <section className='projects'>
        <Title text='Nasze projekty' />
        <p className='description'> Projekty stworzone przez <br /> członków naszego koła </p>
        <div className='projects-cards'>
          {projects.map((project) => (
            <Card key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
    </section>
  )
}

const Card: React.FC<Project> = ({ title, description }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h3> {title} </h3>
        <p> {description} </p>
      </div>
      <div className='card-icon'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Projects