import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import Root from './Pages/Root'
import Month from './Pages/Month'
import ThemePage from './Pages/ThemePage'
import Home from "./Pages/Home";
import MonthList from "./Pages/MonthList";
import New from "./Pages/New";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "year/:year",
        element: <MonthList />,
      },
      {
        path: "month/:year/:month",
        element: <Month />,
      },
      {
        path: "theme",
        element: <ThemePage />,
      },
      {
        path: "new",
        element: <New />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);