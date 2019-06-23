import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import Login from './index'

afterEach(cleanup)

test('call onSbumit with login and password ', () => {
  const handleSubmit = jest.fn()
  const { getByText, getByTestId } = render(<Login onSubmit={handleSubmit} />)
  getByTestId(/username/i).value = 'cain'
  getByTestId(/password/i).value = 'azerty'
  fireEvent.click(getByText(/send/i))
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    password: 'azerty',
    username: 'cain'
  })
})
