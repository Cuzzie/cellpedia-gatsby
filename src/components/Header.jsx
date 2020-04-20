import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Hamburger from "../components/Hamburger"
import styles from "../styles/Header.module.styl"

const Header = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "newlogotexteng2@8x.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.header}>
      <Img fixed={query.file.childImageSharp.fixed} alt="Cellpedia Header" />
      <Hamburger />
    </div>
  )
}

export default Header
