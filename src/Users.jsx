import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./User";

export function Users() {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoader(true);
    const controller = new AbortController();
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res?.data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(true);
      })
      .finally(() => {
        setLoader(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {loader ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <ul>
          {users.map(function (user) {
            return <User key={user?.id} name={user?.name} />;
          })}
        </ul>
      )}
    </>
  );
}
