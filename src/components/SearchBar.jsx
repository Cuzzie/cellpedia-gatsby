import React from "react"
import styles from "../styles/SearchBar.module.styl"
import searchSVG from "../images/search-solid.svg"

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchText}>
        <input type="search" placeholder="Search here.." />
      </div>
      <div className={styles.searchIcon}>
        <img src={searchSVG} width="20" height="20" alt="Search" />
      </div>
    </div>
  )
}

export default SearchBar
