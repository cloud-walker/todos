import {useQuery, useMutation, queryCache} from 'react-query'
import {provideDeps} from 'react-depree'

const ENDPOINT = 'http://localhost:3000/todos'

const fetchTodos = () => fetch(ENDPOINT).then(res => res.json())

const createTodo = data =>
  fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())

export const useTodosQuery = () => {
  const {fetchTodos} = useTodosQuery.useDeps()
  return useQuery(ENDPOINT, fetchTodos)
}
useTodosQuery.useDeps = provideDeps({fetchTodos})

export const useTodoMutation = () =>
  useMutation(createTodo, {
    onSuccess: () => {
      queryCache.refetchQueries(ENDPOINT)
    },
  })
useTodoMutation.useDeps = provideDeps({createTodo})
