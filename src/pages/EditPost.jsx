import { useContext } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

function EditPost() {
  const errorMessage = useActionData();
  const isError = errorMessage ? true : false;
  const { id, title, body, userId } = useLoaderData();
  const { state } = useNavigation();
  const isLoading = state === "submitting" || state === "loading";

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div className={isError ? "form-group error" : "form-group"}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" defaultValue={title} />
            {isError ? (
              <div className="error-message">{errorMessage}</div>
            ) : (
              <></>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId" defaultValue={userId}>
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
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" defaultValue={body}></textarea>
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to={`/post/${id}`}>
            Cancel
          </Link>
          <button className="btn" disabled={isLoading}>
            {isLoading ? "Loading" : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

async function action({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId");
  const body = formData.get("body");

  if (title === "") return "Required";

  const post = fetch(`http://127.0.0.1:3000/posts/${params?.postId}`, {
    method: "PUT",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body, userId: userId }),
  });

  return redirect(`/post/${params?.postId}`);
}

function loader({ params, request: { signal } }) {
  return fetch(`http://127.0.0.1:3000/posts/${params.postId}`, { signal });
}

export const editPostRoute = {
  element: <EditPost />,
  action,
  loader,
};
