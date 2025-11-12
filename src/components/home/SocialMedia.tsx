import React from 'react'

import Title from '../reusable/Title'

import './styles/SocialMedia.css'

interface SocialMedias {
    logo?: object,
    name: string,
    link: string,
}

const SocialMedia: React.FC = () => {
  const socialMedias: SocialMedias[] = [
    {
        name: 'FACEBOOK',
        link: ''
    },
    {
        name: 'INSTAGRAM',
        link: ''
    },
    {
        name: 'LINKTREE',
        link: ''
    }
  ]

  return (
    <section className='socialMedia'>
        <Title text='Obserwuj nas!' />
        <div className='medias'>
            {socialMedias.map((media) => (
                <MediaBlock name={media.name} link ={media.link}/>
            ))}
        </div>
    </section>
  )
}

const MediaBlock: React.FC<SocialMedias> = ({ name, link }) => {
  const handleMediaBlockClick = () => {
    window.open(link, '_blank');
  }

  return (
    <div className='mediaBlock' onClick={() => handleMediaBlockClick()}>
        <div className='logo'></div>
        <h3> {name} </h3>
    </div>
  )
}

export default SocialMedia