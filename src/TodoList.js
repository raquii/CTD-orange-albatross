import React from 'react'
import TodoListItem from './TodoListItem';

function TodoList({todoList, onRemoveTodo}) {
  return (
      <ul>
          {todoList.map(t => <TodoListItem key={t.id} id={t.id} title={t.title} onRemoveTodo={onRemoveTodo}/>)}
      </ul>
  )
}

export default TodoList;