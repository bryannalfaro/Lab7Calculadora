import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import Pantalla from '../Pantalla/Pantalla'
import operaciones from '../../operaciones/operaciones'
import '../../styles/app.css'

const App = () => {
  const [texto, setTexto] = useState('')
  const [segTexto, setSegTexto] = useState('')
  const [operando, setOperando] = useState('')
  const [despliegue, setDespliegue] = useState('')
  const [contador, setContador] = useState(0) // contador de operandos

  const clicke = (v) => {
    if (operando !== '') {
      if (segTexto.length < 9) {
        setSegTexto(segTexto + v)
      }
    } else if (texto.length < 9) {
      setTexto(texto + v)
    }
  }

  useEffect(() => {
    setDespliegue(segTexto)
  }, [segTexto])

  useEffect(() => {
    setDespliegue(texto)
  }, [texto])

  const clear = () => {
    setDespliegue('')
    setTexto('')
    setOperando('')
    setSegTexto('')
    setContador(0)
  }

  const oper = () => {
    if (operando === '+') {
      const res = operaciones.suma(Number(texto), Number(segTexto))
      if (res < 0 || res > 999999999) {
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === '-') {
      const res = operaciones.resta(Number(texto), Number(segTexto))
      if (res < 0 || res > 999999999) {
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === 'x') {
      const res = operaciones.producto(Number(texto), Number(segTexto))
      if (res < 0 || res > 999999999) {
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === '%') {
      const res = operaciones.modulo(Number(texto), Number(segTexto))
      if (res < 0 || res > 999999999) {
        setDespliegue('ERROR &#128526;')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === '/') {
      const res = operaciones.division(Number(texto), Number(segTexto))
      if (res < 0 || res > 999999999) {
        if (res.toString().length > 9) {
          setDespliegue(res.toString().split(0, 9))
          setTexto(res.toString().split(0, 9))
          setSegTexto('')
        }
        setDespliegue('ERROR')
      } else if (res.toString().length > 9) {
        const a = Number(res.toString().slice(0, 9))
        setDespliegue(a)
        setTexto(a)
        setSegTexto('')
      } else if (res.toString().length <= 9) {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    }
  }

  const operandos = (val) => {
    if (contador === 1) {
      if (val !== operando) {
        if (segTexto !== '') {
          oper()
          setContador(contador + 1)
        }
        setOperando(val)
      }
      setContador(contador + 1)
      setDespliegue('')
    } else {
      setOperando(val)
      setContador(contador + 1)
      setDespliegue('')
    }
  }

  useEffect(() => {
    if (contador === 2) {
      if (segTexto !== '') {
        oper()
      }
      setContador(1)
    }
  }, [contador])

  return (
    <div className="super">
      <h5 className="titleCalculator">WEB CALCULATOR &#128526;</h5>
      <div className="padre">
        <Pantalla value={despliegue} />
        <div className="buttons">
          <Button classe="clear" clicke={clear} texto="C" />
          <Button classe="masmen" texto="+/-" />
          <Button classe="modulo" clicke={operandos} texto="%" />
          <Button classe="division" clicke={operandos} texto="/" />
          <Button classe="siete" clicke={clicke} texto="7" />
          <Button classe="ocho" clicke={clicke} texto="8" />
          <Button classe="nueve" clicke={clicke} texto="9" />
          <Button classe="multi" clicke={operandos} texto="x" />
          <Button classe="cuatro" clicke={clicke} texto="4" />
          <Button classe="cinco" clicke={clicke} texto="5" />
          <Button classe="seis" clicke={clicke} texto="6" />
          <Button classe="resta" clicke={operandos} texto="-" />
          <Button classe="uno" clicke={clicke} texto="1" />
          <Button classe="dos" clicke={clicke} texto="2" />
          <Button classe="tres" clicke={clicke} texto="3" />
          <Button classe="suma" clicke={operandos} texto="+" />
          <Button classe="cero" clicke={clicke} texto="0" />
          <Button classe="punto" texto="." />
          <Button classe="equal" clicke={oper} texto="=" />
        </div>
      </div>
    </div>
  )
}

export default App
