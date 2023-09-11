"use client"

import React from "react"

type QueryFetchContextType = (query: string) => Promise<any> | null

export const QueryFetchContext =
  React.createContext<QueryFetchContextType | null>(null)

interface ProviderProps {
  children: any
}

export default function QueryFetchProvider({ children }: ProviderProps) {
  async function queryFetch(query: string) {
    const res = await fetch("https://countries.trevorblades.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
      }),
    })
    return await res.json()
  }

  return (
    <QueryFetchContext.Provider value={queryFetch}>
      {children}
    </QueryFetchContext.Provider>
  )
}
