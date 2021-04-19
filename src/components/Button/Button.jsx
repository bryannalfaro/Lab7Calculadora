import React from 'react'
import '../../styles/Button.css'
import PropTypes from 'prop-types'

const Button = ({ classe, texto }) => (
  <button className={classe} type="button">{texto}</button>
)

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
}

export default Button
