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

### Lesson 1.5

- [x] Open `/src/App.js`
- [x] Define a `useEffect` React hook with `todoList` as a dependency
- [ ] Inside the side-effect handler function, save the `todoList` inside `localStorage` with the key `"savedTodoList"`
  - Hint: `localStorage.setItem` method
- [x] Run your application and view in browser
  - [x] Enter a new todo in "Add Todo" form and submit
  - [x] Open your Local Storage panel in the DevTools
    - In Chrome: DevTools > Application > Local Storage > localhost
  - [x] Verify that your `"savedTodoList"` item exists
  - [x] Notice that the value, however, is not readable (see below)

![local storage object](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/local-storage-object.png)

- [x] Open `/src/App.js`
- [x] Update your side-effect function to convert `todoList` to a string before saving in `localStorage`
  - Hint: `JSON.stringify` method
- [x] View your application in browser
  - [x] Clear your Local Storage
    - In Chrome: DevTools > Application > Storage > Click "Clear site data"
  - [x] Repeat the same steps from above
  - [x] Notice that the value is completely readable as a string (see below)

![Local Storage with List saved as Object](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/local-storage-string.png)

Now your list is saved in Local Storage, but when you refresh the page? It still disappears!

This is because we wrote the list data to Local Storage but we aren't reading it when the application is rendered. Let's fix that:

- [x] Open `/src/App.js`
- [x] Update the default state for `todoList` to read your `"savedTodoList"` item from `localStorage`
  - Hint: `localStorage.getItem` method
- [x] View your application in browser
  - [x] Notice that there is an error, `todoList` is not an Array

How could our list not be an Array? Right! We turned it into a string before saving in Local Storage. So now that we're ready to use the value, we need to turn it back into an Array.

- [x] Open `/src/App.js`
- [x] Update your default state to parse the value of the `"savedTodoList"` item
  - Hint: `JSON.parse` method
- [x] View your application in browser
  - [x] Notice that your previous todo item(s) are still visible after refreshing the page

- Create Custom Hook
  - [x] Open `/src/App.js`
  - [x] Above the `App` functional component, create a new function named `useSemiPersistentState` which will be a custom hook
  - [x] Cut (copy/remove) the `useState` and `useEffect` hooks from `App` into `useSemiPersistentState`
  - [x] Add a `return` statement in `useSemiPersistentState` that returns the `todoList` state variable and setter in an Array (just like how it's returned from the `useState` hook)
  - [x] Update `App` to use the new custom hook
    - Hint: Copy the `useState` hook from before, but change `useState` to the custom hook `useSemiPersistentState` (no arguments)
  - [x] View your application in browser
    - [x] Verify that your Todo List still appears correctly

- Fragments
  - [x] Open `/src/App.js` and update the JSX to use a Fragment

### Lesson 1.6

- [x] Inside `/src` directory, create a new file called `InputWithLabel.js`
- [x] Open `/src/InputWithLabel.js`
- [x] Declare and export a new functional React component named `InputWithLabel`
- [x] Move label and input JSX from `AddTodoForm.js` to `InputWithLabel.js` (see below)
  - [x] Open `/src/AddTodoForm.js`
  - [x] Cut (copy and remove) the label and input elements
  - [x] Open `/src/InputWithLabel.js`
  - [x] Inside the multi-line return, paste the elements you copied (hint: use a Fragment)
  - [x] Add `props` as a parameter in the `InputWithLabel` function
  - [x] Update `todoTitle` and `handleTitleChange` references to come from `props`
- [x] Refactor `AddTodoForm.js` to use new `InputWithLabel` component and pass the necessary props
- [x] Run your application and view in browser
  - [x] Verify that your "Add Todo Form" still appears correctly

Great, now we have a reusable component! But what if we wanted to reuse this "Input with Label" in a different form? The "Label" is hard-coded as "Title" which isn't very reusable. Let's fix that:

- [x] Open `/src/InputWithLabel.js`
- [x] Replace the text inside the label element with a new `props` variable named `label`
- [x] Open `/src/AddTodoForm.js`
- [x] Pass a `label` prop to the `InputWithLabel` component with value `"Title"`
- [x] View your application in browser
  - [x] Verify that your "Add Todo Form" still appears correctly

![To-Do Application with Reusable Component](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/reusable-component.png)

- Refactor Input with Label to use Component Composition
- [x] Open `/src/InputWithLabel.js`
- [x] Replace `label` prop with `children` so that any child node(s) are used as the label text
- [x] Open `/src/AddTodoForm.js`
- [x] Refactor the `InputWithLabel` component
  - [x] Remove the `label` prop
  - [x] Change the component to have an open/close tag instead of being self-closing
  - [x] Pass the text `Title` inside the component tags
- [x] View your application in browser
  - [x] Verify that your "Add Todo Form" still appears correctly

- Add Auto-Focus to Input
- [x] Open `/src/InputWithLabel.js`
- [x] Add `autoFocus` prop to input element
- [x] View your application in browser
  - [x] Verify that input element is focused on page load

![To-Do Application with Focused Input](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/imperative-focus.png)

Now the input is focused automatically, but what happens when you submit the "Add Todo" form? Focus is lost! Let's update our code so the input element is focused on every render:

- [x] Open `/src/InputWithLabel.js`
- [x] Use the `useRef` React hook to create an imperative ref named `inputRef`
- [x] Define a `useEffect` React hook with an empty dependency list
- [x] Inside the side-effect handler function, call the `focus()` method on the current `inputRef`
- [x] Remove the `autoFocus` prop on the input element
- [x] Add a `ref` prop with value `inputRef` on the input element
- [x] View your application in browser
  - [x] Verify that input element is focused on page load
  - [x] Enter a new todo in "Add Todo" form and submit
  - [x] Verify that input element is re-focused automatically

- Add "Remove" Button to List Items
- [x] Open `/src/TodoListItem.js`
- [x] Add a button element, type "button", inside the list item with text "Remove"
- [x] Open `/src/App.js`
- [x] Define a new handler function named `removeTodo` with parameter `id`
  - [x] Inside this function, remove the item with the given `id` from `todoList`
    - hint: `filter` or `splice` methods
  - [x] Call the `setTodoList` state setter and pass the new or modified Array
- [x] Pass `removeTodo` as a callback handler prop named `onRemoveTodo` to the `TodoList` component
- [x] Open `/src/TodoList.js`
- [x] Pass `onRemoveTodo` prop as a callback handler prop named `onRemoveTodo` to the `TodoListItem` component
- [x] Open `/src/TodoListItem.js`
- [x] Add an `onClick` prop to the button element and pass a function that calls `onRemoveTodo` from props with the current item id as an argument
- [x] View your application in browser
  - [x] Click the "Remove" button next to any list item
  - [x] Verify that the corresponding item is removed from the list
  - [x] Refresh the page and verify that the item is still removed

![To-Do Application with Remove Buttons](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/remove-handler.png)

### Lesson 1.7

- [x] Open `src/App.js`
- [x] Delete the `useSemiPersistentState` function call from `App`
- [x] Copy the `useState` and `useEffect` hooks from `useSemiPersistentState` function back into `App`
- [x] Delete the `useSemiPersistentState` function
- [x] Run your application and view in browser
  - [x] Verify that your Todo List still appears correctly

Currently our list data is retrieved synchronously from the browser's storage, but in the next lesson we will be fetching it asynchronously from an API. Let's update our code to mimic asynchronous data fetching:

- [x] Below the `todoList` state, define a `useEffect` React hook with an empty dependency list
- [x] Inside the side-effect handler function, define a new Promise and pass in a callback function with parameters `resolve` and `reject`
  - [x] hint: `Promise()` constructor
- [x] To mimic a loading delay, inside the callback function declare a timeout (hint: `setTimeout` method) with the following arguments:
  - [x] callback: function with no parameters
  - [x] delay time: 2000 milliseconds (2 seconds)
- [x] Inside the timeout callback function, call the parameter `resolve` which is a callback function for when the Promise is successful and pass it an Object with property `data` as a nested empty Object
- [x] Inside the `data` object, add a property `todoList` and set it's value to the initial/default list state (copy from `useState` hook)
- [x] Update the default state for `todoList` to be an empty Array
- [x] View your application in the browser
  - [x] Notice that the Todo List is now empty and doesn't persist after refresh

So what's missing? We are retrieving our list from `localStorage` but we aren't updating our `todoList` state with the data so it remains empty. Let's fix that:

- [x] Chain a `then` method to your `Promise` constructor and pass it a function with parameter `result`
- [x] Inside the function, use your state setter to update the list and pass the `todoList` from your `result` object
- [x] View your application in the browser

You'll notice now that the list is being saved in `localStorage` but after refreshing the page it is reset to empty. This is because our other side-effect is overwriting the data before the asynchronous fetch is complete.

We need a way to know that the data is still loading before trying to update it in `localStorage`.

- [x] After the `todoList` state declaration, create a new state variable named `isLoading` with update function named `setIsLoading` with default value `true`
- [x] Inside the second `useEffect` hook (with `todoList` dependency), add an `if` statement to check that `isLoading` is false before setting `localStorage`

Now we just need to way to turn loading off once the data has been fetched.

- [x] Revisit the `then` callback in the first `useEffect` hook
- [x] After setting the `todoList` state, add another line to set `isLoading` state to `false`
- [x] View your application in the browser
  - [x] Enter a new todo in "Add Todo" form and submit
  - [x] Reload the page and wait 2 seconds
  - [x] Notice that the saved item now appears in the list

Great! Now our data is being saved properly again, but that delay in loading makes it seem like the list is empty at first. Let's add a loading indicator to prevent confusion.

- [x] Inside the `App` JSX, create a new paragraph element above `TodoList` with text "Loading..."
- [x] View your application in the browser
  - [x] Reload the page and notice that the loading message is visible
  - [x] Wait 2 seconds and notice that the Todo List appears but the loading message is still there

We don't want to always show the loading indicator, it should conditionally appear based on our `isLoading` state.

- [x] Using a ternary operator inside JSX, if `isLoading` is `true` render the loading message, otherwise render the `TodoList` component
- [x] View your application in the browser
  - [x] Reload the page and notice that the loading message is visible
  - [x] Wait 2 seconds and notice that the loading indicator disappears when the Todo List becomes visible
