import React, { useState } from 'react'
import './styles/JoinUsForm.css'

interface JoinUsFormProps {
  isOpen: boolean
  onClose: () => void
}

const JoinUsForm: React.FC<JoinUsFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Form logic to be added here
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className="form-overlay" onClick={onClose}></div>
      <div className={`join-us-form ${isOpen ? 'open' : ''}`}>
        <div className="form-header">
          <h2>Dołącz do nas</h2>
          <button className="close-button" onClick={onClose} aria-label="Zamknij">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jan Kowalski"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jan.kowalski@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Numer telefonu</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+48 123 456 789"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Dlaczego chcesz do nas dołączyć?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Napisz kilka słów o sobie i swoich zainteresowaniach..."
            />
          </div>

          <button type="submit" className="submit-button">
            Wyślij zgłoszenie
          </button>
        </form>
      </div>
    </>
  )
}

export default JoinUsForm

