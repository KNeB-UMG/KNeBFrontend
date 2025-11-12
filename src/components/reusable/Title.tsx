import React from 'react'

import './styles/Title.css'

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2> {text} </h2>
  )
}

export default Title