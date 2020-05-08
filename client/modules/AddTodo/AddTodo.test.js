import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import React from 'react'

import {overrideDeps} from '../depree'
import {useTodoMutation} from '../todos'
import {createTodoMock} from '../todos/mocks'
import {AddTodo} from '.'

const setupTest = ({createTodo}) => {
  overrideDeps(useTodoMutation, {createTodo})

  return render(<AddTodo />)
}

test('it should render properly', async () => {
  const createTodo = jest.fn(createTodoMock)
  setupTest({createTodo})

  const inputText = screen.getByLabelText('Todo')

  expect(inputText).toBeVisible()
  expect(inputText).toHaveValue('')

  fireEvent.change(inputText, {target: {value: 'Fare la spesa'}})
  expect(inputText).toHaveValue('Fare la spesa')

  fireEvent.submit(screen.getByText('Submit'))

  await waitFor(() => {
    expect(inputText).toHaveValue('')
    expect(createTodo).toHaveBeenCalledWith({title: 'Fare la spesa'})
  })
})
