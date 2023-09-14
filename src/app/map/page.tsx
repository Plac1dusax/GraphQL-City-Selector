"use client"

import React, { useState, useEffect } from "react"
import { useSearchParams } from "../../../node_modules/next/navigation"
import CountryInformation from "@/components/CountryInformation/CountryInformation"
import { ReactBingmaps } from "react-bingmaps"
import styles from "../../styles/pageStyles/map.module.css"

const KEY = "AjESHK1fkVQuRadCk6RuUCt9i4-9U0Qj6a3B-TuN8wSj1HniQMtNOJEwM0Oe94a5"

export default function Map() {
  const [searchedCountry, setSearchedCountry] = useState<string>(null)
  const [countryCoordinates, setCountryCoordinates] = useState<object>()
  const [countryInformation, setCountryInformation] = useState<object>()

  const searchedCountryCode = useSearchParams().get("countryCode")

  useEffect(() => {
    if (searchedCountryCode) {
      setSearchedCountry(searchedCountryCode)
    }
  }, [])

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchedCountryCode}`
    )
      .then((data) => {
        return data.json()
      })
      .then((locations) => {
        const validLocation =
          locations.length > 1
            ? locations.filter((location) => {
                return (
                  location.addresstype === "country" ||
                  location.addresstype === "territory" ||
                  location.addresstype === "state" ||
                  location.addresstype === "administrative" ||
                  location.addresstype === "island" ||
                  location.addresstype === "disputed"
                )
              })[0]
            : locations[0]

        setCountryCoordinates({
          center: [validLocation.lat, validLocation.lon],
        })
      })
  }, [searchedCountry])

  useEffect(() => {
    console.log(searchedCountryCode)
    fetch(
      `https://restcountries.com/v3.1/name/${searchedCountryCode
        ?.replace(/_/g, " ")
        .replace(/\[/g, "(")
        .replace(/\]/g, ")")}`
    )
      .then((data) => {
        return data.json()
      })
      .then((countryData) => {
        if (countryData.length > 1) {
          const independentCountry = countryData.find((data) => {
            return data.independent
          })

          setCountryInformation(independentCountry)
        } else {
          setCountryInformation(countryData[0])
        }
      })
  }, [searchedCountry])

  return (
    <div className={styles.map_wrapper}>
      {countryCoordinates ? (
        <ReactBingmaps
          bingmapKey={KEY}
          center={countryCoordinates.center}
          zoom={6}
          disableLocateMeButton={true}
        >
          <ReactBingmaps.Layer
            id="countryLayer"
            shapeData={{
              type: "Polygon",
            }}
          />
        </ReactBingmaps>
      ) : null}
      {countryInformation ? (
        <CountryInformation countryInformation={countryInformation} />
      ) : null}
    </div>
  )
}
