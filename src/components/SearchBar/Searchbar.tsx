import React from "react"
import styles from "../../styles/componentStyles/searchBar.module.css"

interface SearchBarProps {
  setCountrySearch: Function
}

export default function SearchBar({
  setCountrySearch: setCountrySearch,
}: SearchBarProps) {
  function handleCountrySearch(e: any) {
    setCountrySearch(e.target.value.toLowerCase().split(" ").join(""))
  }

  return (
    <div className={styles.search_bar_container}>
      <label htmlFor="country">Search for country:</label>
      <input
        onChange={handleCountrySearch}
        id="country"
        name="country"
        type="text"
        placeholder="Enter country name"
      />
    </div>
  )
}
