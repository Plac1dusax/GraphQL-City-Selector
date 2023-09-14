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

  const languages = Object?.values?.(countryInformation?.languages)

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
      <div
        className={
          countryInformationActive ? styles.arrow_active : styles.arrow
        }
      >
        <BiSolidUpArrow />
      </div>
      <div className={styles.country_information_container}>
        <h2 className={styles.country_header}>
          {countryInformation?.name.official}
        </h2>
        <div className={styles.country_flag}>
          <Image
            src={countryInformation?.flags.png}
            alt={countryInformation?.flags.alt}
            fill
          />
        </div>
        <div className={styles.county_information_list}>
          <div className={styles.country_information}>
            <h3 className={styles.country_information_header}>Capital:</h3>
            <div className={styles.country_information_value}>
              {countryInformation?.capital?.map((capital) => {
                return <span>{capital}</span>
              })}
            </div>
          </div>
          <div className={styles.country_information}>
            <h3 className={styles.country_information_header}>Region:</h3>
            <div className={styles.country_information_value}>
              {countryInformation?.region}
            </div>
          </div>
          {countryInformation.languages ? (
            <div className={styles.country_information}>
              <h3 className={styles.country_information_header}>Languages:</h3>
              <div className={styles.country_information_value}>
                {languages.map((language, index) => {
                  return (
                    <span>
                      {index === languages.length - 1
                        ? language
                        : `${language},`}
                    </span>
                  )
                })}
              </div>
            </div>
          ) : null}
          <div className={styles.country_information}>
            <h3 className={styles.country_information_header}>Population:</h3>
            <div className={styles.country_information_value}>
              {formattedPopulation}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
