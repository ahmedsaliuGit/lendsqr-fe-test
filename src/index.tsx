import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login";
import ErrorPage from "./routes/Error";
import Dashboard from "./routes/Dashboard";
import Users from "./components/Users";
import UserDetail from "./components/Users/UserDetail";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Users /> },
      {
        path: "/dashboard/users/:id",
        element: <UserDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={rootRouter} />
  </React.StrictMode>
);
