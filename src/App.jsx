import { React } from "react";
import { TodoList } from "./TodoList";
import { User } from "./User";
import { TodoListClass } from "./TodoListClass";
import { UserClass } from "./UserClass";

function App() {
  // Excercise for Chapter 10 - JSX Basics
  /*
  return (
    <>
      <div className="large" id="largeDiv">
        <label htmlFor="inputId">Number</label>
        <input type="number" id="inputId" defaultValue={3} />
      </div>
    </>
  );
  */

  // Excercise for Chapter 11 - Creating Components
  return (
    <>
      <div className="chapter-11">
        {/* Render normal Todo List Component */}
        <h1>Todo List</h1>
        <TodoList />

        {/* Render class Todo List Component */}
        <h1>Todo List Class</h1>
        <TodoListClass />

        {/* Render normal User Component */}
        Welcome <User />
        <br/>

        {/* Render class User Component */}
        Welcome <UserClass />
      </div>
    </>
  );
}

export default App;
