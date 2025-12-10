import React, { useState } from 'react'

import Home from './pages/Home'
import JoinUsForm from './components/other/JoinUsForm'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home onJoinClick={openForm} />} />
      </Routes>
      <JoinUsForm isOpen={isFormOpen} onClose={closeForm} />
    </Router>
  )
}

export default App