"use client"

import React, { useState, useEffect, useContext } from "react"
import SelectBox from "../SelectBox/SelectBox"
import { QueryFetchContext } from "@/context/QueryFetchContext"
import { SelectedContinentContext } from "@/context/SelectedContinentContext"
import SearchBar from "../SearchBar/SearchBar"
import styles from "../../styles/componentStyles/citySelector.module.css"

interface CitySelectorProps {
  countries: any[]
  setCountries: Function
  countrySearch: string
  setCountrySearch: Function
}

export default function CitySelector({
  countries: countries,
  setCountries: setCountries,
  countrySearch: countrySearch,
  setCountrySearch: setCountrySearch,
}: CitySelectorProps) {
  const queryFetch = useContext(QueryFetchContext)
  const { selectedContinent, setSelectedContinent } = useContext(
    SelectedContinentContext
  )
  const [continents, setContinents] = useState([])

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
        if (countrySearch === "") {
          const selectedContinentalCountries = data.data.continents.filter(
            (continent: any) => {
              return continent.code === selectedContinent
            }
          )

          setCountries(selectedContinentalCountries[0].countries)
        } else {
          const selectedContinentalCountries = data.data.continents.filter(
            (continent: any) => {
              return continent.code === selectedContinent
            }
          )[0].countries

          const validCountries = selectedContinentalCountries.filter(
            (country: any) => {
              const countryName = country.name.toLowerCase().split(" ").join("")

              return countryName.includes(countrySearch)
            }
          )

          setCountries(validCountries)
        }
      })
    }
  }, [selectedContinent, countrySearch])

  return (
    <div className={styles.city_selector_wrapper}>
      <SelectBox
        value={continents}
        setSelectedContinent={setSelectedContinent}
      />
      <SearchBar setCountrySearch={setCountrySearch} />
    </div>
  )
}
