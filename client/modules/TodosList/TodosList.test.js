import React from 'react'
import {render, waitForElementToBeRemoved, wait} from '@testing-library/react'

import {fetchTodos} from '../todos/effects'
import {fetchTodosMock, todosStub} from '../todos/mocks'
import {TodosList} from '.'

// jest.mock('../todos/todos.js', () => {
//   return {
//     useTodosQuery: () => {
//       return {
//         data: [
//           {id: 0, title: 'Comprare la nutella'},
//           {id: 1, title: 'Pulire il bagno'},
//           {id: 2, title: 'Preparare la valigia'},
//         ],
//         status: 'success',
//         error: null,
//       }
//     },
//   }
// })
jest.mock('../todos/effects')

// test('it should work properly', async () => {
//   const {getByText, getAllByTestId, debug} = render(
//     <TodosList fetchTodos={fetchTodosMock} />,
//   )

//   // expect sullo stato loading...
//   expect(getByText('Loading...')).toBeVisible()

//   await waitForElementToBeRemoved(() => getByText('Loading...'))

//   expect(getByText('Comprare la nutella')).toBeVisible()
//   expect(getByText('Pulire il bagno')).toBeVisible()
//   expect(getByText('Preparare la valigia')).toBeVisible()
//   expect(getAllByTestId('todo-item').length).toBeGreaterThan(1)
// })

test('it should work properly with jest mocking', async () => {
  fetchTodos.mockImplementation(fetchTodosMock)
  const {getByText, getAllByTestId, debug} = render(<TodosList />)

  // expect sullo stato loading...
  expect(getByText('Loading...')).toBeVisible()

  await waitForElementToBeRemoved(() => getByText('Loading...'))

  expect(getByText('Comprare la nutella')).toBeVisible()
  expect(getByText('Pulire il bagno')).toBeVisible()
  expect(getByText('Preparare la valigia')).toBeVisible()
  expect(getAllByTestId('todo-item').length).toBeGreaterThan(1)
})
