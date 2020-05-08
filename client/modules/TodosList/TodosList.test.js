import React from 'react'
import {render, waitForElementToBeRemoved, screen} from '@testing-library/react'

import {fetchTodosMock} from '../todos/mocks'
import {useTodosQuery} from '../todos'
import {overrideDeps} from '../depree'
import {TodosList} from '. '

test('it should work properly', async () => {
  overrideDeps(useTodosQuery, {fetchTodos: fetchTodosMock})

  render(<TodosList />)

  await waitForElementToBeRemoved(screen.getByText('Loading...'))

  expect(await screen.findByText('Comprare la nutella')).toBeVisible()
})
