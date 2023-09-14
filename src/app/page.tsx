"use client"

import React, { useState, useEffect } from "react"
import CitySelector from "@/components/CitySelector/CitySelector"
import Country from "@/components/Country/Country"
import styles from "../styles/pageStyles/home.module.css"

export default function Home() {
  const [countries, setCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState("")
  const [selectedCountryCode, setSelectedCountryCode] = useState(null)
  const [previousSelectedCountry, setPreviousSelectedCountry] = useState("")

  const isSelected = (index: number) => {
    if (countries.length - 1 >= 10) {
      if (index === 9) return true
      return false
    } else {
      if (index === countries.length - 1) return true
      return false
    }
  }

  return (
    <div className={styles.homepage_wrapper}>
      <div className={styles.city_selector_container}>
        <CitySelector
          countries={countries}
          setCountries={setCountries}
          countrySearch={countrySearch}
          setCountrySearch={setCountrySearch}
        />
        <div className={styles.countries_list}>
          {countries.map((country: any, index) => {
            return (
              <Country
                key={index}
                countries={countries}
                countryCode={country.code}
                countryName={country.name}
                isSelected={isSelected(index)}
                selectedCountryCode={selectedCountryCode}
                setSelectedCountryCode={setSelectedCountryCode}
                previousSelectedCountry={previousSelectedCountry}
                setPreviousSelectedCountry={setPreviousSelectedCountry}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
