# 1.2 - Mentor Session

| **Topic** | **Date** | **Lesson** |
| :---: | :---: | :---: |
| React DOM & Components | 06.15.22 | [link](https://learn.codethedream.org/react-fundamentals-react-dom-and-components/) |

## Session Outline

- [:wave: Check-In](#wave-check-in)
- [:mag: Review](#mag-review)
  - [Vocabulary Review](#vocabulary-review)
  - [Knowledge Check-In](#knowledge-check-in)
- [:bulb: Main Concepts](#bulb-main-concepts)
  - [Vocabulary Terms](#vocabulary-terms)
  - [React Component](#react-components)
  - [Instantiating Components](#instantiating-components)
  - [React DOM](#react-dom)
  - [Component Definition](#component-definition)
- [:question: Additional Questions](#question-additional-questions)

## :wave: Check-In

### Check-In Open Question

- What is something that you are excited to learn more about this week?

### Progress Poll Question

- What is your progress on **last week's** assignment?

  - [ ] Done
  - [ ] Almost Done
  - [ ] Halfway
  - [ ] Just started
  - [ ] Haven't started

- What is your progress on **this week's** assignment?

  - [ ] Done
  - [ ] Almost Done
  - [ ] Halfway
  - [ ] Just started
  - [ ] Haven't started

---

## :mag: Review

Let's review some key terms and concepts from last week's lesson: [*React Fundamentals: Project Setup & React Basics*](https://learn.codethedream.org/react-fundamentals-project-setup-and-react-basics/).

### Vocabulary Review

- Single-page application (SPA)
- Framework
- React
- Component
- JSX
- Babel
- `map()`
- `key`
- Camel case
- Pascal case

### Knowledge Check-In

- How do we know when to use `var`, `let`, or `const` when declaring a variable?
  - `var` - never, reassignable, not block scoped
  - `let` - for variables that might change value, reassignable, block scoped
  - `const` - for variables that won't change value, not reassignable, block scoped
- How does JSX become HTML?
  - Babel transpiles JSX into VanillaJS which then evaluates to our HTML webpage
- Why is it important to use the `key` attribute when creating a list?
  - "A React app is made up of a tree of components. Whenever there’s a prop or state change in any component, React re-renders its components into its virtual DOM. The diffing algorithm compares the new virtual DOM with the old DOM at each level of the component tree, starting from the root node."

---

## :bulb: Main Concepts

This week's lesson builds on the foundational knowledge from last week to expand our understanding of the **React Component**!

### Vocabulary Terms

- Instantiate
- DOM
- Declaration
- Arrow Function
- Callback Function
- Implicit Return

### React Components

- What are *components* in React?

  ```js
  {vocabularyTerms.map( v => <li>{v.term} - {v.definition}</li>)}
  ```

- Why do we use components?

  A component must:

  1. return JSX
  2. take one argument, `props`, which is an object
  3. The functional binding name must begin with a capital letter

- What are types of components in the component hierarchy?

### Instantiating Components

- What does *instantiate* mean?
- How do we instantiate a component in React?

### React DOM

- What is the DOM?
  - The Document Object Model is a tree-like structure that contains all of the elements and their properties of a website as the nodes.

- What is the ReactDOM?

  The `ReactDOM` is an importable package that provides methods to manage the DOM elements of a webpage

- What is the purpose of the `createRoot` function?
  > :warning: `createRoot` is a new method in React 18.

  `createRoot` takes a "container" element and returns a root. We can then call `root.render()` with the element we want to render as an argument

  ```js
  // in index.js
  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(
    <App />
  );
  ```

  ```js
  // you may also see older react projects (< React 18) use this syntax:
  const container = document.getElementByID("root");

  ReactDOM.render(
    <App />,
    container
  );
  ```

### Component Definition

- How can we declare a component?

- Aside from syntax, what are the differences between **arrow functions** and **function declarations**?
  - Implicit Return
  - `this`

---

## :question: Additional Questions

> Question: ?

Answer goes here
