import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const savedList = JSON.parse(localStorage.getItem("savedTodoList"));

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ data: { todoList: savedList } }), 2000)
    ).then(result => {
      setTodoList([...result.data.todoList]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const stringList = JSON.stringify(todoList);
    if (!isLoading) {
      localStorage.setItem("savedTodoList", stringList);
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const updatedTodos = todoList.filter(t => t.id !== id);
    setTodoList(updatedTodos);
  }

  return (
    <>
      <h1>Todo List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} />
    </>
  );
}

export default App;
