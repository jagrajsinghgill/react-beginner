import { useContext, useRef } from "react";
import { TodoContext } from "./App";

export function NewTodoForm() {
  const { addNewTodo } = useContext(TodoContext);
  const newTodo = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.current.value === "") return "";

    addNewTodo(newTodo.current.value);
    return (newTodo.current.value = "");
  }
  return (
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" ref={newTodo} />
      <button>Add Todo</button>
    </form>
  );
}
