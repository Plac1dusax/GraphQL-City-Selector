import React from "react"
import styles from "../../styles/componentStyles/selectOption.module.css"

interface SelectOptionProps {
  option: string
  code: string
}

export default function SelectOption({
  option: option,
  code: code,
}: SelectOptionProps) {
  return <option className={styles.select_option}>{option}</option>
}
