import {
  Outlet,
  createBrowserRouter,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import "./assets/styles.css";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./components/Navbar";
import { User } from "./pages/User";
export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <h1>Welcome!</h1>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/posts", { signal });
        },
      },
      {
        path: "/post/:id",
        element: <Post />,
        loader: ({ params, request: { signal } }) => {
          return fetch(`http://127.0.0.1:3000/posts/${params.id}`, { signal });
        },
      },
      {
        path: "/users",
        element: <Users />,
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/users", { signal });
        },
      },
      {
        path: "/user/:id",
        element: <User />,
        loader: ({ params, request: { signal } }) => {
          return fetch(`http://127.0.0.1:3000/users/${params.id}`, { signal });
        },
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/todos", { signal });
        },
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="container">
          <Outlet />
        </div>
      )}
    </>
  );
}

function ErrorBoundary() {
  const env = import.meta.env;
  let error = useRouteError();
  return (
    <>
      {env.MODE === "development" ? (
        <h1>{error?.toString()}</h1>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
}

function NotFound() {
  return <h1>404 : Page not found</h1>;
}
