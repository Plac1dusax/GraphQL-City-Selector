"use client"

import React, { useEffect, useRef } from "react"
import SelectOption from "../SelectOption/SelectOption"
import styles from "../../styles/componentStyles/selectBox.module.css"

interface SelectBoxProps {
  value: any[]
  setSelectedContinent: Function
}

export default function SelectBox({
  value: value,
  setSelectedContinent: setSelectedContinent,
}: SelectBoxProps) {
  const selectBoxRef = useRef<any>(null)

  function handleContinentClick(e: any) {
    const selectedContinent = e.target.value.toLowerCase().split(" ").join("")
    const selectedContinentCode = value.filter((continent) => {
      return (
        continent.name.toLowerCase().split(" ").join("") === selectedContinent
      )
    })[0].code

    setSelectedContinent(selectedContinentCode)
  }

  useEffect(() => {
    if (selectBoxRef.current) {
      const defaultContinent = value.filter((continent) => {
        return continent.name === selectBoxRef?.current?.value
      })

      setSelectedContinent(defaultContinent[0]?.code)
    }
  }, [value])

  return (
    <div className={styles.select_box_wrapper}>
      <label htmlFor="continent" className={styles.select_box_header}>
        Continent:
      </label>
      <select
        ref={selectBoxRef}
        onChange={handleContinentClick}
        className={styles.select_box}
      >
        {value.map((value, index) => {
          return (
            <SelectOption key={index} code={value.code} option={value.name} />
          )
        })}
      </select>
    </div>
  )
}
