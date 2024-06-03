import { TodoItem } from "./TodoItem";

export function TodosItems({ todos }) {
  return (
    <ul>
      {todos &&
        todos.length > 0 &&
        todos.map((item) => <TodoItem key={item.id} {...item} />)}
    </ul>
  );
}
