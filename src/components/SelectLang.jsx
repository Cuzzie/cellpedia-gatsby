import React from "react"
import styles from "../styles/SelectLang.module.styl"

const SelectLang = ({ changeLang }) => {
  return (
    <div className={styles.lang}>
      <span
        role="button"
        onKeyDown={() => changeLang("ENG")}
        onClick={() => changeLang("ENG")}
        tabIndex={0}
      >
        ENG
      </span>{" "}
      |{" "}
      <span
        role="button"
        onKeyDown={() => changeLang("CN")}
        onClick={() => changeLang("CN")}
        tabIndex={0}
      >
        CN
      </span>
    </div>
  )
}

export default SelectLang
