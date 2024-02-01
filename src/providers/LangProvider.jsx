

import React, { useState } from 'react'
import { LangContext } from './context/LangContext';

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ru");
  const toggleLang = () => {
    setLang(lang === "ru" ? "en" : "ru")
  };

  return (
    <LangContext.Provider value={{lang,toggleLang}}> 
      {children}
   </LangContext.Provider>
  )
}
