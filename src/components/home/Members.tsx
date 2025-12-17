import React, { useState } from 'react'
import './styles/Members.css'

interface Member {
  id: number
  name: string
  surname: string
  role?: string
  imageUrl: string
}

const Members: React.FC = () => {
  const boardMembers: Member[] = [
    {
      id: 1,
      name: 'Jan',
      surname: 'Kowalski',
      role: 'Przewodniczący',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Anna',
      surname: 'Nowak',
      role: 'Zastępca',
      imageUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Piotr',
      surname: 'Wiśniewski',
      role: 'Skarbnik',
      imageUrl: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Dr. Maria',
      surname: 'Dąbrowska',
      role: 'Opiekun naukowy',
      imageUrl: 'https://i.pravatar.cc/150?img=4',
    },
  ]

  const members: Member[] = [
    {
      id: 1,
      name: 'Kamil',
      surname: 'Lewandowski',
      imageUrl: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 2,
      name: 'Magdalena',
      surname: 'Wójcik',
      imageUrl: 'https://i.pravatar.cc/150?img=6',
    },
    {
      id: 3,
      name: 'Tomasz',
      surname: 'Kamiński',
      imageUrl: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 4,
      name: 'Aleksandra',
      surname: 'Zielińska',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 5,
      name: 'Michał',
      surname: 'Szymański',
      imageUrl: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 6,
      name: 'Natalia',
      surname: 'Woźniak',
      imageUrl: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 7,
      name: 'Jakub',
      surname: 'Kozłowski',
      imageUrl: 'https://i.pravatar.cc/150?img=11',
    },
    {
      id: 8,
      name: 'Karolina',
      surname: 'Jankowska',
      imageUrl: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 9,
      name: 'Bartosz',
      surname: 'Mazur',
      imageUrl: 'https://i.pravatar.cc/150?img=13',
    },
    {
      id: 10,
      name: 'Wiktoria',
      surname: 'Kwiatkowska',
      imageUrl: 'https://i.pravatar.cc/150?img=14',
    },
    {
      id: 11,
      name: 'Kacper',
      surname: 'Krawczyk',
      imageUrl: 'https://i.pravatar.cc/150?img=15',
    },
    {
      id: 12,
      name: 'Julia',
      surname: 'Piotrowska',
      imageUrl: 'https://i.pravatar.cc/150?img=16',
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const membersPerPage = 4
  const totalPages = Math.ceil(members.length / membersPerPage)
  const currentMembers = members.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  )

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  return (
    <section className="members-section">
      <div className="members-container">
        {/* Sekcja Zarządu */}
        <div className="board-section">
          <div className="section-header">
            <h2>Zarząd koła</h2>
            <p className="section-subtitle">
              Osoby odpowiedzialne za kierowanie i rozwój naszego koła naukowego
            </p>
          </div>
          <div className="board-grid">
            {boardMembers.map((member) => (
              <div key={member.id} className="member-card board-card">
                <div className="member-image">
                  <img src={member.imageUrl} alt={`${member.name} ${member.surname}`} />
                </div>
                <div className="member-info">
                  <h3>
                    {member.name} <br /> {member.surname}
                  </h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja Członków Koła */}
        <div className="members-list-section">
          <div className="section-header">
            <h2>Członkowie koła</h2>
            <p className="section-subtitle">
              Aktywni członkowie naszego koła naukowego e-Biznesu
            </p>
          </div>
          <div className="members-grid">
            {currentMembers.map((member) => (
              <div key={member.id} className="member-card">
                <div className="member-image">
                  <img src={member.imageUrl} alt={`${member.name} ${member.surname}`} />
                </div>
                <div className="member-info">
                  <h3>
                    {member.name} <br /> {member.surname}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={handleNextPage}
                aria-label="Pokaż kolejne osoby"
              >
                Pokaż więcej
              </button>
              <span className="pagination-info">
                {currentPage + 1} / {totalPages}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Members

