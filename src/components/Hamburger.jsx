import React, { useContext } from "react"
import SidebarContext from "../context/SidebarContext"
import styles from "../styles/Hamburger.module.styl"

const Hamburger = () => {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => toggleSidebar()}
      onClick={() => toggleSidebar()}
      className={styles.hamburger}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  )
}

export default Hamburger
