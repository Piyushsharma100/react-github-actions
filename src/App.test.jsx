import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

import App from './App'

afterEach(() => {
  cleanup()
})

describe('App component', () => {
  it('renders the welcome heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /welcome to my github action revision/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the React GitHub Actions heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /react github actions/i,
      }),
    ).toBeInTheDocument()
  })
})
