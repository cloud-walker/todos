export const todosStub = [
  {
    title: 'Comprare la nutella',
    id: 0,
  },
  {
    title: 'Pulire il bagno',
    id: 1,
  },
  {
    title: 'Preparare la valigia',
    id: 2,
  },
]

export const fetchTodosMock = () =>
  new Promise(resolve => {
    setTimeout(resolve, 250, todosStub)
  })
