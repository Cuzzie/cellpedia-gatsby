import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Cell from "../components/Cell"
import data from "../data/data.json"
import styles from "../styles/Cells.module.styl"
import { isEng } from "../utils/utils"

const Cells = ({ lang }) => {
  const query = useStaticQuery(graphql`
    query {
      cellTherapyImg: file(relativePath: { eq: "cell-images/blood@4x.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hematopoieticImg: file(
        relativePath: { eq: "cell-images/bacteria@4x.png" }
      ) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      immuneImg: file(relativePath: { eq: "cell-images/shielda.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      stemCellsImg: file(relativePath: { eq: "cell-images/cell@4x.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mesenchymalImg: file(relativePath: { eq: "cell-images/eye@4x.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      internationalImg: file(relativePath: { eq: "cell-images/globe@4x.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const {
    cellTherapy,
    hematopoietic,
    immune,
    stemCells,
    mesenchymal,
    international,
  } = data

  return (
    <div className={styles.cellColumns}>
      <div className={styles.column}>
        <Link
          to={isEng(lang) ? cellTherapy.eng.path : data.cellTherapy.cn.path}
        >
          <Cell
            icon={query.cellTherapyImg.childImageSharp}
            title={isEng(lang) ? cellTherapy.eng.title : cellTherapy.cn.title}
            imgClass={cellTherapy.imgClass}
          />
        </Link>
        <Link to={isEng(lang) ? hematopoietic.eng.path : hematopoietic.cn.path}>
          <Cell
            icon={query.hematopoieticImg.childImageSharp}
            title={
              isEng(lang) ? hematopoietic.eng.title : hematopoietic.cn.title
            }
            imgClass={hematopoietic.imgClass}
          />
        </Link>
        <Link to={isEng(lang) ? immune.eng.path : immune.cn.path}>
          <Cell
            icon={query.immuneImg.childImageSharp}
            title={isEng(lang) ? immune.eng.title : immune.cn.title}
            imgClass={immune.imgClass}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <Link to={isEng(lang) ? stemCells.eng.path : stemCells.cn.path}>
          <Cell
            icon={query.stemCellsImg.childImageSharp}
            title={isEng(lang) ? stemCells.eng.title : stemCells.cn.title}
            imgClass={stemCells.imgClass}
          />
        </Link>
        <Link to={isEng(lang) ? mesenchymal.eng.path : mesenchymal.cn.path}>
          <Cell
            icon={query.mesenchymalImg.childImageSharp}
            title={isEng(lang) ? mesenchymal.eng.title : mesenchymal.cn.title}
            imgClass={mesenchymal.imgClass}
          />
        </Link>
        <Link to={isEng(lang) ? international.eng.path : international.cn.path}>
          <Cell
            icon={query.internationalImg.childImageSharp}
            title={
              isEng(lang) ? international.eng.title : international.cn.title
            }
            imgClass={international.imgClass}
          />
        </Link>
      </div>
    </div>
  )
}

export default Cells
