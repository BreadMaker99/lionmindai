'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import t, { type Lang, type Translations } from '@/lib/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  tr: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'nl',
  setLang: () => {},
  tr: t.nl,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('nl')

  useEffect(() => {
    const stored = localStorage.getItem('lma-lang') as Lang
    if (stored === 'nl' || stored === 'en') setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lma-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] as typeof t.nl }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
