import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./App";
import { EditTodo } from "./EditTodo";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);
  const [showInput, setShowInput] = useState(false);

  return (
    <li className="list-item">
      {showInput ? (
        <EditTodo id={id} name={name} setShowInput={setShowInput} />
      ) : (
        <>
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button onClick={() => setShowInput(true)} data-button-edit>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
