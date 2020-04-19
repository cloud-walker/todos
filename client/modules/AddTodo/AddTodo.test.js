import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import React from 'react'
import {DepsProvider} from 'react-depree'

import {AddTodo} from '.'
import {useTodoMutation} from '../todos'
import {createTodoMock} from '../todos/mocks'

const setupTest = ({createTodo}) => {
  return render(
    <DepsProvider depsMap={[[useTodoMutation, {createTodo}]]}>
      <AddTodo />
    </DepsProvider>,
  )
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
