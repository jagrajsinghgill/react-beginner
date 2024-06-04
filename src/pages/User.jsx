import { useEffect, useReducer, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Loader } from "../components/Loader";
import { TodosItems } from "../components/todos/TodosItems";
import { PostCards } from "../components/posts/PostCards";

const ACTIONS = {
  FETCH: "FETCH",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const APIs = {
  POSTS: "http://127.0.0.1:3000/posts?userId=:userId",
  TODOS: "http://127.0.0.1:3000/todos?userId=:userId",
};

function reducer(state, { type }) {
  switch (type) {
    case ACTIONS.FETCH:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("Action is undefined");
  }
}

export function User() {
  const { id, name, company, email, website, address } = useLoaderData();
  const [{ isLoading, isError }, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
  });
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH });
    const controller = new AbortController();
    fetch(APIs.POSTS.replace(":userId", id), { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        setPosts(res);
      })
      .catch((e) => {
        if (e.name === "AbortError") return;
        dispatch({ type: ACTIONS.ERROR });
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        dispatch({ type: ACTIONS.SUCCESS });
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH });
    const controller = new AbortController();
    fetch(APIs.TODOS.replace(":userId", id), { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        setTodos(res);
      })
      .catch((e) => {
        if (e.name === "AbortError") return;
        dispatch({ type: ACTIONS.ERROR });
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        dispatch({ type: ACTIONS.SUCCESS });
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>There is some error</h1>
      ) : (
        <>
          <h1 className="page-title">{name}</h1>
          <div className="page-subtitle">{email}</div>
          <div>
            <b>Company:</b> {company?.name}
          </div>
          <div>
            <b>Website:</b> {website}
          </div>
          <div>
            <b>Address:</b> {address?.street} {address?.suite}, {address?.city},{" "}
            {address?.zipcode}
          </div>
          {posts && posts.length > 0 && (
            <>
              <h3 className="mt-4 mb-2">Posts</h3>
              <PostCards posts={posts} />
            </>
          )}
          {todos && todos.length > 0 && (
            <>
              <h3 className="mt-4 mb-2">Todos</h3>
              <TodosItems todos={todos} />
            </>
          )}
        </>
      )}
    </>
  );
}
