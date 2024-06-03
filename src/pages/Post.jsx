import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export function Post() {
  const { title, userId, body } = useLoaderData();
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/user/${userId.toString()}`}>Leanne Graham</Link>
      </span>
      <div>{body}</div>
    </>
  );
}
