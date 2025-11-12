import React from 'react'

import Title from '../reusable/Title'

import './styles/Management.css'

interface Member {
  photo: string;
  name: string;
  role: string;
}

const Management: React.FC = () => {
  const members: Member[] = [
    {
      photo: 'https://via.placeholder.com/150',
      name: 'Kacper Kmiecik',
      role: 'Przewodniczący',
    },
    {
      photo: 'https://via.placeholder.com/150',
      name: 'Oskar Kacała',
      role: 'Zastępca',
    },
    {
      photo: 'https://via.placeholder.com/150',
      name: 'Michał Wulkowicz',
      role: 'Skarbnik',
    },
    {
      photo: 'https://via.placeholder.com/150',
      name: 'mgr Paweł Szyman',
      role: 'Opiekun',
    },
  ]

  return (
    <section className='management'>
        <Title text='Zarząd koła' />
        <div className='members'>
          {members.map((member) => (
            <Member key={member.name} photo={member.photo} name={member.name} role={member.role} />
          ))}
        </div>
    </section>
  )
}

const Member: React.FC<Member> = ({ photo, name, role }) => {
  return (
    <div className='member'>
      {/* <img src={photo} alt={name} /> */}
      <div className='photo'></div>
      <p className='name'> {name} </p>
      <div className='divider'></div>
      <p className='role'> {role} </p>
    </div>
  )
}

export default Management