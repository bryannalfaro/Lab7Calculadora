import React from 'react'
import '../../styles/Button.css'
import PropTypes from 'prop-types'

const Button = ({ texto }) => (
  <button type="button">{texto}</button>
)

Button.propTypes = {
  texto: PropTypes.string.isRequired,
}

export default Button
