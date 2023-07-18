import React, { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('CA')

    const setCA = () => setLanguage('CA')
    
    const setES = () => setLanguage('ES')

    const setEN = () => setLanguage('EN')

  return (
    <LanguageContext.Provider value={{ language, setCA, setES, setEN }}>
        { children }
    </LanguageContext.Provider>
  )
}
