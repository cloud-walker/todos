import {useQuery, useMutation, queryCache} from 'react-query'

import {defineDeps, getDeps} from '../depree'

const ENDPOINT = 'http://localhost:3000/todos'
const QUERY_KEY = ENDPOINT

const fetchTodos = () => fetch(ENDPOINT).then(res => res.json())

const createTodo = data =>
  fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())

export const useTodosQuery = () => {
  return useQuery(QUERY_KEY, getDeps(useTodosQuery).fetchTodos)
}
defineDeps(useTodosQuery, {fetchTodos})

export const useTodoMutation = () => {
  return useMutation(getDeps(useTodoMutation).createTodo, {
    onMutate: todo => {
      if (!todo.id) return

      const prevTodos = queryCache.getQueryData(QUERY_KEY)

      queryCache.setQueryData(QUERY_KEY, old => [...old, todo])

      return () => queryCache.setQueryData(QUERY_KEY, prevTodos)
    },
    onError: (err, todo, rollback) => rollback(),
    onSettled: () => queryCache.refetchQueries(QUERY_KEY),
  })
}
defineDeps(useTodoMutation, {createTodo})
