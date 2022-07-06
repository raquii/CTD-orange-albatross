import React from 'react'
import TodoListItem from './TodoListItem';

function TodoList({todoList}) {
  return (
      <ul>
          {todoList.map(t => <TodoListItem key={t.id} title={t.title}/>)}
      </ul>
  )
}

export default TodoList;