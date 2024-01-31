import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the ref is defined before accessing its value
    const enteredText = todoTextInputRef.current?.value;

    if (!enteredText || enteredText.trim().length === 0) {
      // Handle the case where the entered text is empty
      return;
    }

    todosCtx?.addTodo(enteredText); // Check if todosCtx is defined before calling methods on it
    todoTextInputRef.current!.value = ""; // Clear the input field
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
