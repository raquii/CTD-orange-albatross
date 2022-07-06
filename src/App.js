import React from 'react';

const todoList = [
    {id: 1, title: 'finish this'},
    { id: 2, title: 'eat dinner' },
    { id: 3, title: 'wash dishes' },
]

function App() {
    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todoList.map(t => <li key={t.id}>{t.title}</li>)}
            </ul>
        </>
    );
}

export default App;
