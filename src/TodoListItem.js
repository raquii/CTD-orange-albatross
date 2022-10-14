import React from "react";
import style from "./TodoListItem.module.css";

export default function TodoListItem({ id, title, onRemoveTodo }) {
  return (
    <li className={style.ListItem}>
      {title}
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
}
