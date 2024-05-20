import { useState, Fragment } from "react";
import "./assets/styles.css";
import { Todo } from "./Todo";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addNewTodo() {
    if (newTodo === "") return;

    setTodoList((currTodos) => {
      return [
        ...currTodos,
        { name: newTodo, completed: false, id: crypto.randomUUID() },
      ];
    });
  }

  function updateTodo(id, completed) {
    setTodoList((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodoList((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <ul id="list">
        {todoList.map(function (listItem) {
          return (
            <Todo
              key={listItem?.id}
              {...listItem}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
