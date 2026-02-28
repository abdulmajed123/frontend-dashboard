import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashbaord/Dashboard";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);

export default router;
