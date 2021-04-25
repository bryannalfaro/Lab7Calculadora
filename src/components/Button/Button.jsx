import React from 'react'
import '../../styles/Button.css'
import PropTypes from 'prop-types'

const Button = ({
  clicke, classe, texto, style,
}) => (
  <button onClick={() => clicke(texto)} className={classe} type="button" style={style}>{texto}</button>
)

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
  clicke: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
}

export default Button
