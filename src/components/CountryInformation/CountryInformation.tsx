"use client"

import React, { useState } from "react"
import Image from "../../../node_modules/next/image"
import { BiSolidUpArrow } from "react-icons/bi"
import styles from "../../styles/componentStyles/countryInformation.module.css"

interface CountryInformationProps {
  countryInformation: object
}

export default function CountryInformation({
  countryInformation: countryInformation,
}: CountryInformationProps) {
  const [countryInformationActive, setCountryInformationActive] = useState(true)

  const formattedPopulation = new Intl.NumberFormat("tr-TR").format(
    countryInformation.population
  )

  function handleCountryInformation() {
    setCountryInformationActive(!countryInformationActive)
  }

  return (
    <div
      onClick={handleCountryInformation}
      className={
        countryInformationActive
          ? styles.country_information_wrapper_active
          : styles.country_information_wrapper
      }
    >
      <div className={styles.arrow}>
        <BiSolidUpArrow />
      </div>
      <div className={styles.country_information_container}>
        <div className={styles.country_header}>
          {countryInformation?.name.official}
        </div>
        <div className={styles.country_flag}>
          <Image
            src={countryInformation?.flags.png}
            alt={countryInformation?.flags.alt}
            fill
          />
        </div>
        <div className={styles.county_informations}>
          <div className={styles.country_information}>
            <div className={styles.country_information_header}>Capital:</div>
            <div className={styles.country_information_value}>
              {countryInformation.capital.map((capital) => {
                return <p>{capital}</p>
              })}
            </div>
          </div>
          <div className={styles.country_information}>
            <div className={styles.country_information_header}>Region:</div>
            <div className={styles.country_information_value}>
              {countryInformation.region}
            </div>
          </div>
          <div className={styles.country_information}>
            <div className={styles.country_information_header}>Languages:</div>
            <div className={styles.country_information_value}>
              {Object.values(countryInformation.languages).map((language) => {
                return <p>{language}</p>
              })}
            </div>
          </div>
          <div className={styles.country_information}>
            <div className={styles.country_information_header}>Population:</div>
            <div className={styles.country_information_value}>
              {formattedPopulation}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
