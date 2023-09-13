"use client"

import React, { useState } from "react"

type SelectedContinentType = {
  selectedContinent: string
  setSelectedContinent: React.Dispatch<React.SetStateAction<string>>
}

export const SelectedContinentContext =
  React.createContext<SelectedContinentType | null>(null)

interface ProviderProps {
  children: any
}

export default function SelectedContinentProvider({ children }: ProviderProps) {
  const [selectedContinent, setSelectedContinent] = useState<string>("")

  return (
    <SelectedContinentContext.Provider
      value={{
        selectedContinent,
        setSelectedContinent,
      }}
    >
      {children}
    </SelectedContinentContext.Provider>
  )
}
