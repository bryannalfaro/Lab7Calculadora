import React from 'react'
import '../../styles/Button.css'
import PropTypes from 'prop-types'

const Button = ({ clicke, classe, texto }) => (
  <button onClick={() => clicke(texto)} className={classe} type="button">{texto}</button>
)

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
  clicke: PropTypes.func.isRequired,
}

export default Button
