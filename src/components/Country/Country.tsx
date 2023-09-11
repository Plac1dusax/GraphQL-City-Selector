"use client"

import React, { useState, useEffect } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import styles from "../../styles/componentStyles/country.module.css"

interface CountryProps {
  countries: any[]
  countryCode: string
  countryName: string
  isSelected: boolean
  selectedCountryCode: string
  setSelectedCountryCode: Function
}

export default function Country({
  countries: countries,
  countryCode: countryCode,
  countryName: countryName,
  isSelected: isSelected,
  selectedCountryCode: selectedCountryCode,
  setSelectedCountryCode: setSelectedCountryCode,
}: CountryProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryCode)

  function handleCountryClick() {
    if (selectedCountry === selectedCountryCode) {
      setSelectedCountryCode(null)
      setSelectedCountry("")
    } else {
      setSelectedCountryCode(countryCode)
      setSelectedCountry(countryCode)
    }
  }

  useEffect(() => {
    if (!isSelected) return

    setSelectedCountry(countryCode)
    setSelectedCountryCode(countryCode)
  }, [isSelected])

  useEffect(() => {
    if (isSelected) {
      setSelectedCountry(countryCode)
      setSelectedCountryCode(countryCode)
    }
  }, [countries])

  return (
    <div
      onClick={handleCountryClick}
      className={
        selectedCountryCode !== ""
          ? selectedCountryCode === selectedCountry
            ? styles.country_selected
            : styles.country
          : styles.country
      }
    >
      <p>{countryName}</p>
      {selectedCountry !== "" ? (
        selectedCountryCode === selectedCountry ? (
          <AiOutlineCheck />
        ) : null
      ) : null}
    </div>
  )
}
