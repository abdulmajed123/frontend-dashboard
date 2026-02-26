import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashbaord/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router;
