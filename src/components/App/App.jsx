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
      setSegTexto(segTexto + v)
    } else {
      setTexto(texto + v)
      console.log('Text', texto)
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
    console.log('esta en operacion')
    if (operando === '+') {
      console.log(texto)
      console.log(segTexto)
      const res = operaciones.suma(Number(texto), Number(segTexto))
      if (res < 0) {
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === '-') {
      const res = operaciones.resta(Number(texto), Number(segTexto))
      if (res < 0) {
        console.log('negative')
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === 'x') {
      const res = operaciones.producto(Number(texto), Number(segTexto))
      if (res < 0) {
        console.log('negative')
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    } else if (operando === '%') {
      const res = operaciones.modulo(Number(texto), Number(segTexto))
      if (res < 0) {
        console.log('negative')
        setDespliegue('ERROR')
      } else {
        setDespliegue(res)
        setTexto(res)
        setSegTexto('')
      }
    }
  }

  const operandos = (val) => {
    console.log('dentro de operandos', contador)
    if (contador === 1) {
      if (val !== operando) {
        console.log('entro')
        if (segTexto !== '') {
          oper()
          setContador(contador + 1)
        }
        setOperando(val)
      }
      console.log('contador', contador)
      setContador(contador + 1)
      console.log('contador2', contador)
      setDespliegue('')
    } else {
      setOperando(val)
      console.log('contador', contador)
      setContador(contador + 1)
      console.log('contador2', contador)
      setDespliegue('')
    }
  }

  useEffect(() => {
    if (contador === 2) {
      console.log('1', texto)
      console.log('2', segTexto)
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
          <Button clicke={clear} texto="C" />
          <Button texto="+/-" />
          <Button clicke={operandos} texto="%" />
          <Button texto="/" />
          <Button clicke={clicke} texto="7" />
          <Button clicke={clicke} texto="8" />
          <Button clicke={clicke} texto="9" />
          <Button clicke={operandos} texto="x" />
          <Button clicke={clicke} texto="4" />
          <Button clicke={clicke} texto="5" />
          <Button clicke={clicke} texto="6" />
          <Button clicke={operandos} texto="-" />
          <Button clicke={clicke} texto="1" />
          <Button clicke={clicke} texto="2" />
          <Button clicke={clicke} texto="3" />
          <Button clicke={operandos} texto="+" />
          <Button clicke={clicke} texto="0" />
          <Button texto="." />
          <Button classe="equal" clicke={oper} texto="=" />
        </div>
      </div>
    </div>
  )
}

export default App
