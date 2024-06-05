import { useEffect, useReducer, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Comments } from "../components/posts/Comments";

const ACTIONS = {
  FETCH: "FETCH",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const APIs = {
  USER: "http://127.0.0.1:3000/users/:userId",
  COMMENTS: "http://127.0.0.1:3000/posts/:postId/comments",
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

export function Post() {
  const postData = useLoaderData();
  const { id, title, userId, body } = postData;
  const [{ isLoading, isError }, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
  });
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH });
    const controller = new AbortController();
    fetch(APIs.USER.replace(":userId", userId), { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        setUser(res);
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
  }, [userId]);

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH });
    const controller = new AbortController();
    fetch(APIs.COMMENTS.replace(":postId", id), { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        setComments(res);
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
          <h1 className="page-title">
            {title}
            <div className="title-btns">
              <Link className="btn btn-outline" to={`/posts/${id}/edit`}>
                Edit
              </Link>
            </div>
          </h1>
          {user ? (
            <span className="page-subtitle">
              By: <Link to={`/user/${userId.toString()}`}>{user?.name}</Link>
            </span>
          ) : (
            <></>
          )}
          <div>{body}</div>
          {comments && comments.length > 0 && <Comments list={comments} />}
        </>
      )}
    </>
  );
}
