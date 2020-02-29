import React from 'react'

import {useTodosQuery} from '../todos-resource'

export const TodosList = () => {
  const {status, error, data, isFetching} = useTodosQuery()

  if (status == 'loading') {
    return <h2>Loading...</h2>
  }

  if (status == 'error') {
    return <h2>Error: {error.message}</h2>
  }

  return (
    <>
      {!data.length ? (
        <div>Woah! Niente da fare!</div>
      ) : (
        <ul>
          {data.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
      <div>{isFetching ? 'Fetching...' : null}</div>
    </>
  )
}
