import {useQuery, useMutation, queryCache} from 'react-query'

const ENDPOINT = 'http://localhost:3000/todos'

const fetchTodos = () => fetch(ENDPOINT).then(res => res.json())

const createTodo = data =>
  fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())

export const useTodosQuery = () => useQuery(ENDPOINT, fetchTodos)

export const useTodoMutation = () =>
  useMutation(createTodo, {
    onSuccess: () => {
      queryCache.refetchQueries(ENDPOINT)
    },
  })
