import React from 'react'
import {DepsProvider} from 'react-depree'
import {render, waitForElementToBeRemoved, screen} from '@testing-library/react'

import {fetchTodosMock} from '../todos/mocks'
import {useTodosQuery} from '../todos'
import {TodosList} from '.'

test('it should work properly', async () => {
  render(
    <DepsProvider depsMap={[[useTodosQuery, {fetchTodos: fetchTodosMock}]]}>
      <TodosList />
    </DepsProvider>,
  )

  await waitForElementToBeRemoved(screen.getByText('Loading...'))

  expect(await screen.findByText('Comprare la nutella')).toBeVisible()
})
