import React from "react"
import PropTypes from "prop-types"

const Qualitie = (props) => {
  return (
    <>
      <span className={`badge m-1 bg-${props.color}`}>{props.name}</span>
    </>
  )
}
Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
export default Qualitie


