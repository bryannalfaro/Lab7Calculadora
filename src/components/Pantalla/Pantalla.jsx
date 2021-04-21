import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/pantalla.css'

const Pantalla = ({ value = 0 }) => (
  <div className="display">{value}</div>
)

Pantalla.propTypes = {
  value: PropTypes.string.isRequired,
}
export default Pantalla
