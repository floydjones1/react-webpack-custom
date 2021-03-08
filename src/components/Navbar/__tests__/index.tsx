import React from 'react'
import { render, screen } from '@testing-library/react'
import MyComponent from '..'

describe('This will test MyComponent', () => {
  test('renders message', () => {

    const thing: { pokemon: string } = { pokemon: 'hi' }

    render(<MyComponent label='Login' />)


    expect(screen.getByText('Login'))
      .toBeInTheDocument()
  })

})