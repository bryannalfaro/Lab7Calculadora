import React from 'react'
import { screen, render } from '@testing-library/react/'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Basic operations test', () => {
  test('App renders', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<App />)
  })
  test('Plus two numbers', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonplus = screen.getByText('+')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number1)
    userEvent.click(buttonplus)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('3')
  })
  test('Sub two numbers', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonsub = screen.getByText('-')
    const number1 = screen.getByText('9')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number1)
    userEvent.click(buttonsub)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('7')
  })
  test('Mult two numbers', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonmult = screen.getByText('x')
    const number1 = screen.getByText('5')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number1)
    userEvent.click(buttonmult)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('10')
  })
  test('Divide two numbers', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttondiv = screen.getByText('/')
    const number1 = screen.getByText('4')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number1)
    userEvent.click(buttondiv)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('2')
  })
  test('Mod % of  two numbers', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonmod = screen.getByText('%')
    const number1 = screen.getByText('9')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number1)
    userEvent.click(buttonmod)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('1')
  })
})

describe('Test for requirements', () => {
  test('Clean display when operator is pressed', () => {
    const { container } = render(<App />)
    const buttonplus = screen.getByText('+')
    const number1 = screen.getByText('9')
    const display = container.getElementsByClassName('display')
    userEvent.click(number1)
    userEvent.click(buttonplus)
    expect(display[0].textContent).toBe('')
  })
  test('Accumulate result in display when other operator is pressed', () => {
    const { container } = render(<App />)
    const buttonplus = screen.getByText('+')
    const number1 = screen.getByText('9')
    const number2 = screen.getByText('8')
    const display = container.getElementsByClassName('display')
    userEvent.click(number1)
    userEvent.click(buttonplus)
    userEvent.click(number2)
    userEvent.click(buttonplus)
    expect(display[0].textContent).toBe('17')
  })
  test('Multiple operations', () => {
    const { container } = render(<App />)
    const buttonplus = screen.getByText('+')
    const buttonsub = screen.getByText('-')
    const buttonmult = screen.getByText('x')
    const buttonmod = screen.getByText('%')
    const number1 = screen.getByText('9')
    const number2 = screen.getByText('8')
    const number3 = screen.getByText('7')
    const number4 = screen.getByText('6')
    const number5 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')
    userEvent.click(number1)
    userEvent.click(buttonmult)
    userEvent.click(number2)
    userEvent.click(buttonmod)
    userEvent.click(number3)
    userEvent.click(buttonplus)
    userEvent.click(number4)
    userEvent.click(buttonsub)
    userEvent.click(number5)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('6')
  })
  test('Operate numbers with more than one digit', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonmult = screen.getByText('x')
    const number1 = screen.getByText('5')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number1)
    userEvent.click(number1)
    userEvent.click(buttonmult)
    userEvent.click(number2)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('1210')
  })
  test('Clear button working', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonplus = screen.getByText('+')
    const number1 = screen.getByText('5')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')
    const clear = screen.getByText('C')

    userEvent.click(number1)
    userEvent.click(buttonplus)
    userEvent.click(number2)
    userEvent.click(equal)
    userEvent.click(clear)
    expect(display[0].textContent).toBe('')
  })

  test('ERROR with negative result', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonsub = screen.getByText('-')
    const number1 = screen.getByText('5')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    userEvent.click(number2)
    userEvent.click(buttonsub)
    userEvent.click(number1)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('ERROR')
  })
  test('ERROR with result > 999999999', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonmult = screen.getByText('x')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('0')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      userEvent.click(number1)
    }
    userEvent.click(buttonmult)
    userEvent.click(number1)
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      userEvent.click(number2)
    }
    userEvent.click(equal)
    expect(display[0].textContent).toBe('ERROR')
  })
  test('Ignore display with more than 9 digits', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<App />)
    const buttonsub = screen.getByText('-')
    // eslint-disable-next-line no-plusplus
    const number1 = screen.getByText('5')
    const number2 = screen.getByText('2')
    const display = container.getElementsByClassName('display')
    const equal = screen.getByText('=')

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 15; i++) {
      userEvent.click(number1)
    }
    userEvent.click(buttonsub)
    userEvent.click(number2)
    userEvent.click(equal)
    expect(display[0].textContent).toBe('555555553')
  })
})
