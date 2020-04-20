import React from "react"
import { Link } from "gatsby"
import { convertSlugToPath } from "../utils/utils"
import styles from "../styles/SelectLangWithLinks.module.styl"

const SelectLangWithLinks = ({ slug }) => {
  return (
    <div className={styles.lang}>
      <Link to={convertSlugToPath(slug, "ENG")}>ENG</Link> |{" "}
      <Link to={convertSlugToPath(slug, "CN")}>CN</Link>
    </div>
  )
}

export default SelectLangWithLinks
