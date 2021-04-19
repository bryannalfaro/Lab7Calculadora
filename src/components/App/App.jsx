import React from 'react'
import Button from '../Button/Button'
import Pantalla from '../Pantalla/Pantalla'
import '../../styles/app.css'

const App = () => (
  <div className="super">
    <h5 className="titleCalculator">WEB CALCULATOR</h5>
    <div className="padre">
      <Pantalla />
      <div className="buttons">
        <Button texto="C" />
        <Button texto="+/-" />
        <Button texto="%" />
        <Button texto="/" />
        <Button texto="7" />
        <Button texto="8" />
        <Button texto="9" />
        <Button texto="x" />
        <Button texto="4" />
        <Button texto="5" />
        <Button texto="6" />
        <Button texto="-" />
        <Button texto="1" />
        <Button texto="2" />
        <Button texto="3" />
        <Button texto="+" />
        <Button texto="0" />
        <Button texto="." />
        <Button classe="equal" texto="=" />
      </div>
    </div>
  </div>

)

export default App
