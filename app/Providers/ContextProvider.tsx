"use client"

import React from 'react'
import  GlobalProvider  from  "../Context/globalProvider"

interface Props {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <GlobalProvider>
        {children}
    </GlobalProvider>
  )
}
