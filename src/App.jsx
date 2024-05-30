import { useEffect, useReducer, useState, createContext } from "react";
import "./styles.css";
import { TodoList } from "./TodoList";
import { NewTodoForm } from "./NewTodoForm";
import { TodoFilterForm } from "./TodoFilterForm";

const LOCAL_STORAGE_KEY = "todos";

const ACTIONS = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      if (payload?.name === "") return todos;
      return [
        ...todos,
        {
          name: payload?.name,
          completed: false,
          id: crypto.randomUUID(),
        },
      ];
    case ACTIONS.TOGGLE:
      if (payload?.id === "" || payload?.completed === null) return todos;
      return todos.map((todo) => {
        if (todo.id === payload?.id)
          return { ...todo, completed: payload?.completed };

        return todo;
      });
    case ACTIONS.DELETE:
      if (payload?.id === "") return todos;
      return todos.filter((todo) => todo.id !== payload?.id);
    case ACTIONS.UPDATE:
      if (payload?.id === "" || payload?.name === "") return todos;
      return todos.map((todo) => {
        if (todo.id === payload?.id) return { ...todo, name: payload?.name };

        return todo;
      });
    default:
      return todos;
  }
}

export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, [], (intialValue) => {
    const localTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localTodos === null) {
      return intialValue;
    }
    return JSON.parse(localTodos);
  });
  const [filterName, setFilterName] = useState("");
  const [filterHideCompleted, setFilterHideCompleted] = useState(false);

  const filteredTodos = todos.filter((todo) => {
    if (filterHideCompleted && todo.completed) return false;
    return todo.name.includes(filterName);
  });

  useEffect(() => {
    if (todos.length <= 0) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  function addNewTodo(name) {
    if (name === "") return;

    dispatch({
      type: ACTIONS.ADD,
      payload: { name },
    });
  }

  function toggleTodo(todoId, completed) {
    dispatch({
      type: ACTIONS.TOGGLE,
      payload: { id: todoId, completed: completed },
    });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  function editTodo(todoId, newName) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id: todoId, name: newName } });
  }

  return (
    <>
      <TodoContext.Provider
        value={{
          todos: filteredTodos,
          addNewTodo,
          toggleTodo,
          deleteTodo,
          editTodo,
        }}
      >
        <TodoFilterForm
          filterName={filterName}
          setFilterName={setFilterName}
          hideCompleted={filterHideCompleted}
          setHideCompleted={setFilterHideCompleted}
        />
        <TodoList />
        <NewTodoForm />
      </TodoContext.Provider>
    </>
  );
}

export default App;
