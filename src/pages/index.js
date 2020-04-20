import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SearchBar from "../components/SearchBar"
import SelectLang from "../components/SelectLang"
import Cells from "../components/Cells"
import styles from "../styles/index.module.styl"

const IndexPage = ({ data }) => {
  const [lang, setLang] = useState("CN")

  const changeLang = lang => {
    setLang(lang)
  }

  return (
    <div className={styles.container}>
      <SelectLang changeLang={changeLang} />
      <div className={styles.homelogo}>
        <Img fixed={data.imgLogo.childImageSharp.fixed} alt="Cellpedia Logo" />
      </div>
      <SearchBar />
      <div className={styles.mainImg}>
        <Img fluid={data.imgMain.childImageSharp.fluid} alt="Cellpedia Main" />
      </div>
      <hr />
      <Cells lang={lang} />
    </div>
  )
}

export const query = graphql`
  query {
    imgLogo: file(relativePath: { eq: "newlogo2@8x.png" }) {
      childImageSharp {
        fixed(width: 250, height: 51) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgMain: file(relativePath: {eq: "cellpedia_main_img.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 460) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
