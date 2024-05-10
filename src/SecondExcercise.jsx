import { TodoList } from "./layoutComponents/TodoList";
import { User } from "./layoutComponents/User";
import { TodoListClass } from "./layoutComponents/TodoListClass";
import { UserClass } from "./layoutComponents/UserClass";

export function SecondExcercise() {

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
