import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllVolunteer from "../pages/AllVolunteer";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "../components/shared/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: 'allVolunteer',
          element: <AllVolunteer></AllVolunteer>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'addVolunteer',
          element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
        }
      ]
    }
  ])

  export default router