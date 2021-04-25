import React from 'react'
import { render } from '@testing-library/react/'
import Pantalla from './Pantalla'

describe('Screen Calculator', () => {
  test('Screen renders correctly', () => {
    render(<Pantalla value="dummy" />)
  })
  test('Shows the value passed in props', () => {
    const { container } = render(<Pantalla value="dummy" />)
    expect(container.firstChild).toHaveTextContent('dummy')
  })
})
