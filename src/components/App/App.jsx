import React from 'react'
import Button from '../Button/Button'
import Pantalla from '../Pantalla/Pantalla'
import '../../styles/app.css'

const App = () => (
  <div className="super">
    <h5>WEB CALCULATOR</h5>
    <div className="padre">
      <Pantalla />
      <div className="buttons">
        <Button texto="1" />
        <Button texto="2" />
        <Button texto="3" />
        <Button texto="4" />
        <Button texto="5" />
        <Button texto="6" />
        <Button texto="7" />
        <Button texto="8" />
        <Button texto="9" />
      </div>
    </div>
  </div>

)

export default App
