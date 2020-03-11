import React from 'react'

import {useTodoMutation} from '../todos'

export const AddTodo = () => {
  const [value, setValue] = React.useState('')
  const [mutate] = useTodoMutation()
  const handleSubmit = e => {
    e.preventDefault()
    mutate({title: value})
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" className="blue">
        Add your todo
      </label>
      <input
        type="text"
        id="title"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <input type="submit" value="Add" />
    </form>
  )
}
