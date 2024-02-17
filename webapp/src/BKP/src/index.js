import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import Root from './Pages/Root'
import ThemePage from './Pages/ThemePage'
import Home from "./Pages/Home";
import MonthList from "./Pages/MonthList";
import MonthlyBudgetControl from "./Pages/MonthlyBudgetControl";

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
        path: "budget/:year",
        element: <MonthList />,
      },
      {
        path: "budget/:year/:month",
        element: <MonthlyBudgetControl />,
      },
      {
        path: "theme",
        element: <ThemePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);