import React from 'react'
import TodoListItem from './TodoListItem';

function TodoList(props) {
  return (
      <ul>
          {props.todoList.map(t => <TodoListItem key={t.id} title={t.title}/>)}
      </ul>
  )
}

export default TodoList;