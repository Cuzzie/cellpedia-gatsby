import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SidebarContext from "../context/SidebarContext"
import Img from "gatsby-image"
import data from "../data/data.json"
import { isEng } from "../utils/utils"

// The CSS of this class is defined in Post.styl file
const Sidebar = ({ lang }) => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sidebar_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 201) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { showSidebar } = useContext(SidebarContext)
  let langProp = lang.toLowerCase()

  return (
    <div
      className={`sidebar${showSidebar ? " show" : ""}`}
      style={{ width: isEng(lang) ? "230px" : "201px" }}
    >
      <Img
        className="sidebarLogo"
        fluid={query.file.childImageSharp.fluid}
        alt="Sidebar logo"
      />
      <ul>
        <li>
          <Link to={data.cellTherapy[`${langProp}`].path}>
            {data.cellTherapy[`${langProp}`].title}
          </Link>
        </li>
        <li>
          <Link to={data.stemCells[`${langProp}`].path}>
            {data.stemCells[`${langProp}`].title}
          </Link>
        </li>
        <li>
          <Link to={data.hematopoietic[`${langProp}`].path}>
            {data.hematopoietic[`${langProp}`].title}
          </Link>
        </li>
        <li>
          <Link to={data.mesenchymal[`${langProp}`].path}>
            {data.mesenchymal[`${langProp}`].title}
          </Link>
        </li>
        <li>
          <Link to={data.immune[`${langProp}`].path}>
            {data.immune[`${langProp}`].title}
          </Link>
        </li>
        <li>
          <Link to={data.international[`${langProp}`].path}>
            {data.international[`${langProp}`].title}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
