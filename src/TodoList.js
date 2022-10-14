import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div id="list-container">
      <ul>
        {todoList.map(t => (
          <TodoListItem
            key={t.id}
            id={t.id}
            title={t.fields.Title}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
