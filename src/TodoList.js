import React from 'react'

const todoList = [
    { id: 1, title: 'finish this' },
    { id: 2, title: 'eat dinner' },
    { id: 3, title: 'wash dishes' },
]

function TodoList() {
  return (
      <ul>
          {todoList.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
  )
}

export default TodoList;