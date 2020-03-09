import React from 'react'

import {useTodoMutation} from '../todos'

export const AddTodo = () => {
  const [mutate] = useTodoMutation()
  const [value, setValue] = React.useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    mutate({title: value})
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}
