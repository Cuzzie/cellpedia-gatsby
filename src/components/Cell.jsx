import React from "react"
import Img from "gatsby-image"
import "../styles/Cell.styl"

const Cell = ({ icon, title, imgClass }) => {
  return (
    <div className="cell">
      <div className="cellIcon">
        <Img fixed={icon.fixed} className={imgClass} />
      </div>
      <div className="cellTitle">{title}</div>
    </div>
  )
}

export default Cell
