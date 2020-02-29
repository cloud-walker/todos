import React from 'react'

import {TodosList} from '../TodosList'
import {AddTodo} from '../AddTodo'

export const Root = () => {
  return (
    <>
      <h1>Tasks</h1>
      <TodosList />
      <AddTodo />
    </>
  )
}
