import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

function NewPost() {
  const errorMessage = useActionData();
  const isError = errorMessage ? true : false;
  const { state } = useNavigation();
  const isLoading = state === "submitting" || state === "loading";

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div
            className={
              isError && errorMessage?.title ? "form-group error" : "form-group"
            }
          >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            {isError && errorMessage?.title ? (
              <div className="error-message">{errorMessage?.title}</div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              isError && errorMessage?.userId
                ? "form-group error"
                : "form-group"
            }
          >
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
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
            {isError && errorMessage?.userId ? (
              <div className="error-message">{errorMessage?.userId}</div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="form-row">
          <div
            className={
              isError && errorMessage?.body ? "form-group error" : "form-group"
            }
          >
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body"></textarea>
            {isError && errorMessage?.body ? (
              <div className="error-message">{errorMessage?.body}</div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to=".." relative="path">
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

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId");
  const body = formData.get("body");
  if (title === "") return { title: "Title is required" };
  if (body === "") return { body: "Body is required" };
  if (userId === "") return { userId: "Author is required" };

  const post = fetch("http://127.0.0.1:3000/posts", {
    method: "POST",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body, userId: userId }),
  });

  return redirect("/posts");
}

export const newPostRoute = {
  element: <NewPost />,
  action,
};
