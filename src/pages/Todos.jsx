import { useLoaderData } from "react-router-dom";
import { TodosItems } from "../components/todos/TodosItems";

export function Todos() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <TodosItems todos={todos} />
    </>
  );
}
