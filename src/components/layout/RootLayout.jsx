import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Loader } from "../Loader";
import { Navbar } from "../Navbar";

export function RootLayout() {
  const { state } = useNavigation();
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      {state === "loading" ? (
        <Loader />
      ) : (
        <div className="container">
          <Outlet />
        </div>
      )}
    </>
  );
}
