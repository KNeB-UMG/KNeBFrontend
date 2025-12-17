import React from 'react'
import './styles/Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  year: number
  imageUrl?: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Platforma e-commerce dla lokalnych producentów',
      description: 'Kompleksowa platforma umożliwiająca lokalnym producentom sprzedaż swoich produktów online. Zawiera system zarządzania zamówieniami, płatności i logistyki.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: 2024,
    },
    {
      id: 2,
      title: 'Aplikacja mobilna do zarządzania flotą',
      description: 'Aplikacja mobilna wspierająca zarządzanie flotą morską. Umożliwia śledzenie statków, zarządzanie załogą i optymalizację tras.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      year: 2023,
    },
    {
      id: 3,
      title: 'System analityczny dla portów morskich',
      description: 'Zaawansowany system analityczny zbierający i przetwarzający dane z portów morskich. Wspiera decyzje operacyjne i strategiczne.',
      technologies: ['Python', 'PostgreSQL', 'D3.js', 'FastAPI'],
      year: 2024,
    },
    {
      id: 4,
      title: 'Marketplace dla usług morskich',
      description: 'Platforma łącząca armatorów z dostawcami usług morskich. Umożliwia łatwe wyszukiwanie i rezerwowanie usług portowych.',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
      year: 2023,
    },
    {
      id: 5,
      title: 'System CRM dla firm logistycznych',
      description: 'Dedykowany system CRM wspierający zarządzanie relacjami z klientami w branży logistycznej i transportowej.',
      technologies: ['Angular', 'NestJS', 'MySQL', 'Redis'],
      year: 2024,
    },
    {
      id: 6,
      title: 'Aplikacja do monitorowania łańcucha dostaw',
      description: 'Rozwiązanie do śledzenia produktów w całym łańcuchu dostaw z wykorzystaniem technologii blockchain.',
      technologies: ['React', 'Solidity', 'Ethereum', 'IPFS'],
      year: 2023,
    },
  ]

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Nasze projekty</h2>
          <p className="projects-subtitle">
            Realizujemy innowacyjne projekty łączące tradycję morską z nowoczesnymi technologiami
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

