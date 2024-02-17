import './App.css';
import Home from "./Pages/Home";
import Month from "./Pages/Month";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function  App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        {
          path: "/month?",
          element: <Month />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;