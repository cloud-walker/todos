import {render, fireEvent, waitFor} from '@testing-library/react'
import React from 'react'
import {DepsProvider} from 'react-depree'

import {AddTodo} from '.'
import {useTodoMutation} from '../todos'
import {createTodoMock} from '../todos/mocks'

test('it should render properly', async () => {
  const createTodo = jest.fn(createTodoMock)
  const {getByLabelText, getByText} = render(
    <DepsProvider depsMap={[[useTodoMutation, {createTodo}]]}>
      <AddTodo />
    </DepsProvider>,
  )

  const inputText = getByLabelText('Todo')

  expect(inputText).toBeVisible()
  expect(inputText).toHaveValue('')

  fireEvent.change(inputText, {target: {value: 'Fare la spesa'}})
  expect(inputText).toHaveValue('Fare la spesa')

  fireEvent.submit(getByText('Submit'))

  await waitFor(() => {
    expect(inputText).toHaveValue('')
    expect(createTodo).toHaveBeenCalledWith({title: 'Fare la spesa'})
  })
})
