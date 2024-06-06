"use client"

import { createContext, useState, useContext} from "react"

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

import React from 'react'
import themes from "./theme";

const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value={{
        theme,
    }}>
        <GlobalUpdateContext.Provider value={{}}>
            {children}

        </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export const useGlobalState = () => useContext(GlobalContext)
export const useGlobalUpdate= () => useContext(GlobalUpdateContext)