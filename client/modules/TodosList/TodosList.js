import React from 'react'

import {useTodosQuery} from '../todos-resource'

export const TodosList = () => {
  const {status, error, data} = useTodosQuery()

  if (status == 'loading') {
    return <h2>Loading...</h2>
  }

  if (status == 'error') {
    return <h2>Error: {error.message}</h2>
  }

  if (!data.length) {
    return <div>Woah! Niente da fare!</div>
  }

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
