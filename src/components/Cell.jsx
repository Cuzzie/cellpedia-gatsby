import React from "react"
import PropTypes from "prop-types"
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

Cell.propTypes = {
  icon: PropTypes.shape({
    fixed: PropTypes.object.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  imgClass: PropTypes.string,
}

export default Cell
