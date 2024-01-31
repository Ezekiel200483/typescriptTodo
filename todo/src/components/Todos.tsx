import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  // Check if todosCtx is defined before accessing its properties
  if (!todosCtx) {
    return null; // or any other fallback behavior
  }

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
