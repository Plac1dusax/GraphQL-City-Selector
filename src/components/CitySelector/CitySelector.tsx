"use client"

import React, { useState, useEffect, useContext } from "react"
import SelectBox from "../SelectBox/SelectBox"
import { QueryFetchContext } from "@/context/QueryFetchContext"
import styles from "../../styles/componentStyles/citySelector.module.css"

interface CitySelectorProps {
  countries: any[]
  setCountries: Function
}

export default function CitySelector({
  countries: countries,
  setCountries: setCountries,
}: CitySelectorProps) {
  const queryFetch = useContext(QueryFetchContext)
  const [continents, setContinents] = useState([])
  const [selectedContinent, setSelectedContinent] = useState("")

  useEffect(() => {
    if (queryFetch) {
      queryFetch(`query{
            continents {
                code
                name
            }
        }`)?.then((data) => {
        setContinents(data.data.continents)
      })
    }
  }, [queryFetch])

  useEffect(() => {
    if (selectedContinent && queryFetch) {
      queryFetch(
        `query{
          continents {
              code
              countries {
                code
                name
              }
          }
        }`
      )?.then((data) => {
        const selectedContinentalCountries = data.data.continents.filter(
          (continent: any) => {
            return continent.code === selectedContinent
          }
        )

        setCountries(selectedContinentalCountries[0].countries)
      })
    }
  }, [selectedContinent])

  return (
    <div className={styles.city_selector_wrapper}>
      <SelectBox
        value={continents}
        setSelectedContinent={setSelectedContinent}
      />
    </div>
  )
}
