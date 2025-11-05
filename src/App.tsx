import React from 'react'

import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App