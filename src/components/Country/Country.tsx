"use client"

import React, { useState, useEffect } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { BiWorld } from "react-icons/bi"
import Link from "../../../node_modules/next/link"
import styles from "../../styles/componentStyles/country.module.css"

interface CountryProps {
  countries: any[]
  countryCode: string
  countryName: string
  isSelected: boolean
  selectedCountryCode: string | null
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
  const [selectedCountryName, setSelectedCountryName] = useState("")

  function handleCountryClick(e: any) {
    if (e.target.matches("a")) return

    if (selectedCountry === selectedCountryCode) {
      setSelectedCountryCode(null)
      setSelectedCountry("")
    } else {
      countryName === "U.S. Minor Outlying Islands"
        ? setSelectedCountryName("Minor_Outlying_Islands")
        : setSelectedCountryName(countryName.replace(/ /g, "_"))

      setSelectedCountryCode(countryCode)
      setSelectedCountry(countryCode)
    }
  }

  useEffect(() => {
    if (!isSelected) return

    switch (countryName) {
      case "U.S. Minor Outlying Islands":
        setSelectedCountryName("Minor_Outlying_Islands")
        break
      case "Cocos [Keeling] Islands":
        setSelectedCountryName("Cocos (Keeling) Islands")
        break
      default:
        setSelectedCountryName(countryName)
    }

    setSelectedCountry(countryCode)
    setSelectedCountryCode(countryCode)
  }, [isSelected, countries])

  return (
    <div
      onClick={handleCountryClick}
      className={
        selectedCountryCode !== ""
          ? selectedCountryCode === countryCode
            ? styles.country_selected
            : styles.country
          : styles.country
      }
    >
      <p>{countryName}</p>
      {selectedCountry !== "" ? (
        selectedCountryCode === countryCode ? (
          <AiOutlineCheck />
        ) : null
      ) : null}
      {selectedCountry !== "" ? (
        selectedCountryCode === countryCode ? (
          <Link
            className={styles.map_button}
            href={`/map?countryCode=${selectedCountryName}`}
            target="_blank"
          >
            <BiWorld />
          </Link>
        ) : null
      ) : null}
    </div>
  )
}
