import React, { useState } from 'react'
import languages from './assets/use_State_assets/languages'
import './App.css'

export default function App() {

  const [selectedLanguage, setlectedLanguage] = useState(languages[0])

  return (
    <div className='container mt-4'>
      <h1>Learn Web development</h1>

      {/* lista bottoni */}

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

    </div>
  )
}
