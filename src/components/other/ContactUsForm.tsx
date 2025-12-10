import React, { useState } from 'react'

import './styles/ContactUsForm.css'

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Contact form submitted:', formData)
    // Form logic to be added here
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="contact-us-form">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Skontaktuj się z nami</h2>
          <p className="contact-subtitle">
            Masz pytania? Chętnie odpowiemy na wszystkie Twoje wątpliwości
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Imię i nazwisko</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jan Kowalski"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jan.kowalski@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Temat</label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="O czym chcesz porozmawiać?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Wiadomość</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder="Napisz swoją wiadomość..."
            />
          </div>

          <button type="submit" className="contact-submit-button">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUsForm

