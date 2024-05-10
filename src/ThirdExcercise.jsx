import { TodoListItem } from "./layoutComponents/TodoListItem";
import { TodoListItemClass } from "./layoutComponents/TodoListItemClass";

export function ThirdExcercise() {

  // Excercise for Chapter 12 - Props
  return (
    <>
      <div>
        {/* Normal component */}
        <TodoListItem isComplete>
          <span>My item</span>
        </TodoListItem>

        {/* Class component */}
        <TodoListItemClass isComplete={false}>
          <span>My Class item</span>
        </TodoListItemClass>
      </div>
    </>
  );
}
