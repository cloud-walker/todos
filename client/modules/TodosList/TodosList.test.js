import React from 'react'
import {DepsProvider} from 'react-depree'
import {
  render,
  wait,
  waitForElementToBeRemoved,
  waitForElement,
} from '@testing-library/react'

import {todosStub} from '../todos/mocks'
import {useTodosQuery} from '../todos'
import {TodosList} from '.'

test('it should work properly', async () => {
  const {getByText} = render(
    <DepsProvider
      depsMap={[
        [useTodosQuery, {fetchTodos: () => Promise.resolve(todosStub)}],
      ]}
    >
      <TodosList />
    </DepsProvider>,
  )

  await waitForElementToBeRemoved(() => getByText('Loading...'))

  expect(
    await waitForElement(() => getByText('Comprare la nutella')),
  ).toBeVisible()
})
