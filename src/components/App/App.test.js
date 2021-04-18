import React from 'react'
import { render } from '@testing-library/react/'
import App from './App'

describe('First test', () => {
  test('App renders', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<App />)
  })
})
