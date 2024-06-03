import { useLoaderData } from "react-router-dom";
import { UserCards } from "../components/users/UserCards";

export function Users() {
  const users = useLoaderData();

  return (
    <>
      <h1 className="page-title">Users</h1>
      <UserCards users={users} />
    </>
  );
}
