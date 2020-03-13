import React from 'react'
import {DepsProvider} from 'react-depree'
import {render, waitForElementToBeRemoved} from '@testing-library/react'

import {fetchTodosMock} from '../todos/mocks'
import {useTodosQuery} from '../todos'
import {TodosList} from '.'

test('it should work properly', async () => {
  const {getByText, findByText} = render(
    <DepsProvider depsMap={[[useTodosQuery, {fetchTodos: fetchTodosMock}]]}>
      <TodosList />
    </DepsProvider>,
  )

  await waitForElementToBeRemoved(getByText('Loading...'))

  expect(await findByText('Comprare la nutella')).toBeVisible()
})
