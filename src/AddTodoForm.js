import React, { useState } from 'react'

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
        <label htmlFor='todoTitle'>Title</label>
        <input name='title' type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange}/>
        <button type="submit">Add</button>
    </form>
  )
}
