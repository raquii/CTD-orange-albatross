# CTD Orange Albatross

## Deliverables

### Lesson 1.1

- [x] Open the src/App.js file
- [x] Remove the existing JSX from the component
- [x] Create a level-one heading that says "Todo List"
- [x] Create an unordered list (`<ul>`)
- [x] Above the `App()` function, create an empty Array and store it in a variable named `todoList`
- [x] Inside the Array, create at least 3 Objects with the following properties:
  - [x] id: unique identifier (ex. 1, 2, 3)
  - [x] title: summary of the todo item (ex. "Complete assignment")
- [x] Inside your unordered list, insert a JavaScript expression
  - hint: {}
- [x] Inside the JavaScript expression, map over your `todoList` array
- [x] For each Object in the Array, return a list item (`<li>`) with the following:
  - [x] key attribute with value of id property
  - [x] inner text content with value of title property

### Lesson 1.2

- [x] Inside `/src` directory, create a new file called `TodoList.js`
- [x] Open `/src/TodoList.js`
- [x] Create a new functional React component (see below)
  - [x] Import React from "react" npm package
  - [x] Declare a function named `TodoList`
  - [x] Export `TodoList` function as default module
- [x] Add a multi-line return statement to your `TodoList` function (this is where we will insert JSX)
  - hint: use parenthesis for multi-line return
- [x] Move list JSX from App.js to `TodoList.js` (see below)
  - [x] Open /src/App.js
  - [x] Cut (copy and remove) the entire list element (`<ul>`) code
  - [x] Open /src/TodoList.js
  - [x] Inside the multi-line return, paste the list element (`<ul>`) code
- [x] Move `todoList` array from App.js to `TodoList.js` (see below)
  - [x] Open /src/App.js
  - [x] Cut (copy and remove) the entire `todoList` variable declaration
  - [x] Open /src/TodoList.js
  - [x] Below the import, paste the `todoList` variable
- [x] Refactor App.js to use new `TodoList` component (see below)
  - [x] Open /src/App.js
  - [x] Below React, import `TodoList`
  - [x] Below the level-one heading, use the `TodoList` component
  - [x] Run your application and view in browser
  - [x] Verify that your Todo List still appears correctly
- [x] Create "Add Todo Form" Component
  - [x] Inside `/src` directory, create a new file called `AddTodoForm.js`
  - [x] Open `/src/AddTodoForm.js`
  - [x] Create a new functional React component (see below)
  - [x] Import React from "react" npm package
  - [x] Declare a function named `AddTodoForm`
  - [x] Export `AddTodoForm` function as default module
  - [x] Add a multi-line return statement to your `AddTodoForm` function (this is where we will insert JSX)
    - hint: use parenthesis for multi-line return
  - [x] Write JSX for `"Add Todo"` form (see below)
  - [x] Create a `<form>` element
  - [ ] Inside the `<form>` element, create a `<label>` element with text "Title"
  - [x] Next, create a text `<input>` element with id "todoTitle"
  - [x] Add htmlFor attribute to `<label>` element with same value as id above
  - [x] Next, create a submit `<button>` element with text "Add"
- [x] Use `AddTodoForm` component in App.js (see below)
  - [x] Open /src/App.js
  - [x] Below React, import `AddTodoForm`
  - [x] Below the level-one heading, use the `AddTodoForm` component
  - [x] Run your application and view in browser
  - [x] Verify that "Add Todo" form appears below heading

### Lesson 1.3

- Move List Item into New "Todo List Item" Component
  - [x] Inside `/src` directory, create a new file called `TodoListItem.js`
  - [x] Open `/src/TodoListItem.js`
  - [x] Create a new functional React component (see below)
    - [x] Import `React` from "react" npm package
    - [x ] Declare a function named `TodoListItem`
    - [x] Export `TodoListItem` function as default module
  - [x] Add a multi-line return statement to your `TodoListItem` function (this is where we will insert JSX)
    - hint: use parenthesis for multi-line return
  - [x] Move list item JSX from `TodoList.js` to `TodoListItem.js` (see below)
    - [x] Open `/src/TodoList.js`
    - [x] Cut (copy and remove) the list item element (`<li>`)
    - [x] Open `/src/TodoListItem.js`
    - [x] Inside the multi-line return, paste the list item element (`<li>`)
    - [x] Remove the `key` attribute
  - [ ] Refactor `TodoList.js` to use new `TodoListItem` component (see below)
    - [x] Open `/src/TodoList.js`
    - [x] Below `React`, import `TodoListItem`
    - [x] Inside the `map()` method, use the `TodoListItem` component
      - [x] Pass `key` as a prop equal to the `id` of the `todo` object
        - [x] Pass `todo` as a prop
  - [x] Update `TodoListItem` component to use props (see below)
    - [x] Open `/src/TodoListItem.js`
    - [x] Add `props` as a parameter in the `TodoListItem` function
    - [x] Update the `todo` object reference to come from `props`
  - [x] Run your application and view in browser
    - [x] Verify that your Todo List still appears correctly

- Handle "Add Todo Form" Submit
  - [x] Open `/src/AddTodoForm.js`
  - [x] Add a `name` attribute to the text input with value `title`
  - [x] Inside the `AddTodoForm` functional component, above the `return` statement, create a new function called `handleAddTodo` that takes `event` as a parameter
    - [x] First, inside this function, prevent the default behavior of the form submit
      - hint: `preventDefault` method
    - [x] Next, retrieve the value of the `title` element from the event target and store it in a variable named `todoTitle`
    - [x] Log the value of `todoTitle` in the console
    - [x] Finally, reset the form so the text input value is cleared
  - [x] Add `onSubmit` prop to form element and pass the `handleAddTodo` function by reference
  - [x] View your application in browser
  - [x] Enter a value in the text input and submit the form
    - [x] Verify that the value you entered is visible in the console
    - [x] Verify that form is cleared properly

- Store "New Todo" in React State
  - [x] Open `/src/App.js`
  - [x] Inside the `App` functional component, above the `return` statement, create a new state variable named `newTodo` with update function named `setNewTodo`
    - hint: `useState` hook
  - [x] Below the `<AddTodoForm />` component, add a paragraph element that displays the value of `newTodo` variable
  - [x] Pass `setNewTodo` as a callback handler prop named `onAddTodo` to the `AddTodoForm` component
  - [x] Open `/src/AddTodoForm.js`
  - [x] Add `props` as a parameter in the `AddTodoForm` function
  - [x] Inside the `handleAddTodo` function, invoke the `onAddTodo` callback prop and pass `newTodo` as an argument
  - [x] View your application in browser
  - [x] Enter a value in the text input and submit the form
    - [x] Verify that the value you entered is visible beneath the form

### Lesson 1.4

- Move Todo List into State
  - [x] Open `/src/App.js`
  - [x] Create new state variable named `todoList` with setter `setTodoList` and default value of an empty Array
  - [x] Pass `todoList` state as a prop named `todoList` to the `TodoList` component
  - [x] Open `/src/TodoList.js`
  - [x] Add `props` as a parameter to the `TodoList` functional component
  - [x] Change `todoList` to reference props instead of the hard-coded variable
  - [x] Delete the hard-coded `todoList` variable
  - [x] Run your application and view in browser
    - [x] Verify that your Todo List is now empty (no list items)

- Control "Add Todo" Input
  - [x] Open `/src/AddTodoForm.js`
  - [x] Create new state variable named `todoTitle` with setter `setTodoTitle`
  - [x] Modify the `<input>` element to be a controlled input
    - [x] Add `value` prop equal to `todoTitle` from component props
    - [x] Add `onChange` prop equal to `handleTitleChange` function reference (we will declare this function in the next step)
  - [x] Above the `handleAddTodo` function, declare a new function named `handleTitleChange` that takes `event` as a parameter
    - [x] First, retrieve the input value from the `event` object and store in variable named `newTodoTitle`
    - [x] Then, call the state setter `setTodoTitle` and pass `newTodoTitle`
  - [x] In the `handleAddTodo` function, remove the `todoTitle` variable and update `onAddTodo` callback handler to pass our `todoTitle` state variable instead
  - [x] Run your application and view in browser
    - [x] Enter a new todo in "Add Todo" form, submit, and verify that the title appears below

- Add New Todo to List
  - [x] Open `/src/App.js`
  - [x] Remove the `newTodo` state variable and the corresponding JSX that displays it
  - [x] Declare a new function named `addTodo` that takes `newTodo` as a parameter
    - [x] Call the `setTodoList` state setter and use the spread operator to pass the existing Objects in the `todoList` Array along with the `newTodo` Object
  - [x] Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`
  - [x] Open `/src/AddTodoForm.js`
  - [x] Inside `handleAddTodo`, update the `onAddTodo` callback prop to pass an Object instead of a String; Object should have the following properties:
    - [x] `title`: equal to `todoTitle`
    - [x] `id`: unique identifier (hint: use `Date.now()` to generate a unique number)
      - _Disclaimer: we are suggesting `Date.now()` for now as a placeholder for unique number generation, but in the future you should not use this_
  - [x] Inside `handleAddTodo`, remove the `reset()` method and replace it with logic to reset the `todoTitle` state to an empty String
  - [x] Run your application and view in browser
    - [x] Enter a todo in "Add Todo" form, submit, and verify item is visible in todo list
    - [x] Enter another todo, submit, and verify that two items are visible in todo list
- Destructure Props
  - [x] Open `/src/TodoList.js` and update `props` to use destructuring
  - [x] Open `/src/TodoListItem.js` and update `props` to use destructuring
  - [x] Open `/src/AddTodoForm.js` and update `props` to use destructuring
