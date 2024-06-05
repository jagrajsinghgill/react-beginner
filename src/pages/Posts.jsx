import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import { PostCards } from "../components/posts/PostCards";
import { useEffect, useRef } from "react";
import axios from "axios";

function Posts() {
  const {
    posts,
    searchParams: { query, userId },
  } = useLoaderData();
  const queryRef = useRef();
  const authorRef = useRef();

  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);

  useEffect(() => {
    authorRef.current.value = userId;
  }, [userId]);

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link className="btn btn-outline" to="new">
            New
          </Link>
        </div>
      </h1>
      <Form method="get" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={authorRef}>
              <option value="">Any</option>
              <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3">Clementine Bauch</option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option>
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </Form>
      <PostCards posts={posts} />
      <Outlet />
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";
  const userId = searchParams.get("userId") || "";
  const queryParams = {};
  if (query) {
    queryParams.q = query;
  }
  if (userId) {
    queryParams.userId = userId;
  }

  return {
    searchParams: {
      query: searchParams.get("query"),
      userId: searchParams.get("userId"),
    },
    posts: await axios
      .create({ baseURL: `http://127.0.0.1:3000/` })
      .get("posts", { signal, params: queryParams })
      .then((res) => res.data),
  };
}

export const postListRoute = {
  element: <Posts />,
  loader,
};
