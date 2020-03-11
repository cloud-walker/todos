const ENDPOINT = 'http://localhost:3000/todos'

export const fetchTodos = () => fetch(ENDPOINT).then(res => res.json())

export const createTodo = data =>
  fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
