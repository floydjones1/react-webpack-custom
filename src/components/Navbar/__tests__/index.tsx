import React from 'react'
import { render, screen } from '@testing-library/react'
import MyComponent from '..'

describe('This will test MyComponent', () => {
  test('renders message', () => {
    render(<MyComponent label='Login' />)
    // as suggested by Giorgio Polvara a more idiomatic way:
    expect(screen.getByText('Login'))
      .toBeInTheDocument()
  })

})