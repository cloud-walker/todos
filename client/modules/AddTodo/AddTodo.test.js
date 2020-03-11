import {render, fireEvent, wait} from '@testing-library/react'
import React from 'react'

import {createTodo} from '../todos/effects'
import {AddTodo} from './AddTodo'

jest.mock('../todos/effects')

test('it should work properly', async () => {
  const createTodoMock = jest.fn(data => Promise.resolve({...data, id: 100}))
  createTodo.mockImplementation(createTodoMock)
  const {getByLabelText, getByText, container} = render(<AddTodo />)

  // Ci deve essere un input con la label "Add your todo"
  expect(getByLabelText('Add your todo')).toBeVisible()

  // Dobbiamo poter scrivere nell'input
  fireEvent.change(getByLabelText('Add your todo'), {
    target: {value: 'Comprare il pane'},
  })
  expect(getByLabelText('Add your todo')).toHaveValue('Comprare il pane')

  // Ci deve essere un tasto "Add"
  expect(getByText('Add')).toBeVisible()

  // Premendo il tasto "Add" viene lanciato il submit e viene resettato l'input
  fireEvent.click(getByText('Add'))

  await wait()

  expect(getByLabelText('Add your todo')).toHaveValue('')
  expect(createTodoMock).toHaveBeenCalled()
  expect(createTodoMock).toHaveBeenCalledWith({title: 'Comprare il pane'})
  expect(container.firstChild).toMatchSnapshot()
})
