import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel'

export default function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState('')

    function handleTitleChange(event){
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    function handleAddTodo(event){
        event.preventDefault()
        const todoObj = { id: Date.now(), title: todoTitle}
        onAddTodo(todoObj)
        setTodoTitle('')
    }

  return (
    <form onSubmit={handleAddTodo}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
        <button type="submit">Add</button>
    </form>
  )
}
