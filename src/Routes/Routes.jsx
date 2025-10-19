import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard";
import History from "../Pages/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "/history",
          element: <History></History>
        }
    ]
  },
]);