import React from 'react'
import { screen, render } from '@testing-library/react/'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Tests', () => {
  test('Button renders correctly', () => {
    render(<Button clicke={jest.fn()} classe="Dummy" texto="Dummy" />)
  })
  test('Button gets the text correctly', () => {
    render(<Button clicke={jest.fn()} classe="Dummy" texto="+" />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  test('Button can be clicked calling an spy function', () => {
    const mock = jest.fn()
    const { container } = render(<Button clicke={mock} classe="Dummy" texto="+" />)
    userEvent.click(container.firstChild)
    userEvent.click(container.firstChild)
    expect(mock).toHaveBeenCalledTimes(2)
  })
})
