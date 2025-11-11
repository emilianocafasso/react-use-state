import React, { useState } from 'react'
import languages from './assets/use_State_assets/languages'
import './App.css'

export default function App() {

  const [selectedLanguage, setlectedLanguage] = useState(languages[0])

  return (
    <div>
      <h1 className='d-flex bg-light pb-2'>Learn Web development</h1>

      {/* lista bottoni */}
      <div className="container mt-4">
        <div className="d-flex flex-wrap gap-2 mb-4">
          {languages.map(language => (
            <button
              key={language.id}
              className='btn btn-primary'
              onClick={() => setlectedLanguage(language)}
            >
              {language.title}
            </button>
          ))}
        </div>

        {/* card linguaggio selezionato */}
        <div className='card'>
          <div className="card-body">
            <h5 className='card-title'>{selectedLanguage.title}</h5>
            <p className="card-text">{selectedLanguage.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
