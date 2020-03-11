import React from 'react'

import {useTodosQuery} from '../todos'

const TodoItem = ({children}) => {
  return <li data-testid="todo-item">{children}</li>
}

export const TodosList = () => {
  const {data, status, error} = useTodosQuery()

  if (status == 'loading') {
    return <div>Loading...</div>
  }

  if (status == 'error') {
    return <div>Error: {error.message}</div>
  }

  return (
    <ul>
      {data.map(todo => (
        <TodoItem key={todo.id}>{todo.title}</TodoItem>
      ))}
    </ul>
  )
}
