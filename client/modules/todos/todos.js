import {useQuery, useMutation, queryCache} from 'react-query'
import {provideDeps} from 'react-depree'

import {createTodo, fetchTodos} from './effects'

const ENDPOINT = 'http://localhost:3000/todos'

export const useTodosQuery = () => {
  // const {fetchTodos} = useTodosQuery.useDeps()
  return useQuery(ENDPOINT, fetchTodos)
}
// useTodosQuery.useDeps = provideDeps({fetchTodos})

export const useTodoMutation = () => {
  const {createTodo} = useTodoMutation.useDeps()
  return useMutation(createTodo, {
    onSuccess: () => {
      queryCache.refetchQueries(ENDPOINT)
    },
  })
}
useTodoMutation.useDeps = provideDeps({createTodo})
