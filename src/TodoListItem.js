import React from 'react'

export default function TodoListItem({id, title, onRemoveTodo}) {
  return (
    <>
      <li>{title}</li>
      <button type='button' onClick={()=> onRemoveTodo(id)}>Remove</button>
    </>
  )
}
