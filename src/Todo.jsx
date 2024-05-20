export function Todo({ name, completed, id, updateTodo, deleteTodo }) {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            type="checkbox"
            data-list-item-checkbox
            checked={completed}
            onChange={(e) => updateTodo(id, e.target.checked)}
          />
          <span data-list-item-text>{name}</span>
          <button data-button-delete onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </label>
      </li>
    </>
  );
}
