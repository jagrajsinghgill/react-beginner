import { useRef, useContext } from "react";
import { TodoContext } from "./App";

export function EditTodo({ id, name, setShowInput }) {
  const { editTodo } = useContext(TodoContext);
  const newName = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (newName.current.value === "") return;
    editTodo(id, newName.current.value);
    setShowInput(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={newName} defaultValue={name} />
      <button>Update Todo</button>
      <button onClick={() => setShowInput(false)}>Cancel</button>
    </form>
  );
}
