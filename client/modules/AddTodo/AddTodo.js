import React from 'react'
import {useForm} from 'react-hook-form'

import {useTodoMutation} from '../todos'

export const AddTodo = () => {
  const {handleSubmit: wrapSubmitHandler, register, setValue} = useForm()
  const [mutate] = useTodoMutation()

  const handleSubmit = wrapSubmitHandler(data => {
    setValue('title', '')
    mutate(data)
  })

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Todo</span>
        <input type="text" name="title" ref={register} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
