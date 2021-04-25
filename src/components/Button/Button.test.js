import React from 'react'
import { screen, render } from '@testing-library/react/'
import Button from './Button'

describe('Tests', () => {
  test('Button renders correctly', () => {
    render(<Button clicke={jest.fn()} classe="Dummy" texto="Dummy" />)
  })
  test('Button gets the text correctly', () => {
    render(<Button clicke={jest.fn()} classe="Dummy" texto="+" />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  test('Button can be clicked', () => {
    render(<Button clicke={jest.fn()} classe="Dummy" texto="+" />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })
})
