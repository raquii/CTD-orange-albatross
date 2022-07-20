import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState(){
    const savedList = JSON.parse(localStorage.getItem('savedTodoList'))
    const [todoList, setTodoList] = useState([...savedList])

    useEffect(() => {
        const stringList = JSON.stringify(todoList)
        localStorage.setItem('savedTodoList', stringList)
    }, [todoList])

    return [todoList, setTodoList]
}

function App() {
    const [todoList, setTodoList] = useSemiPersistentState();

    function addTodo(newTodo){
        setTodoList([...todoList, newTodo]);
    }

    function removeTodo(id){
        const updatedTodos = todoList.filter(t => t.id !== id);
        setTodoList(updatedTodos);
    }

    return (
        <>
            <h1>Todo List</h1>
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            <AddTodoForm onAddTodo={addTodo}/>
        </>
    );
}

export default App;
