import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllVolunteer from "../pages/AllVolunteer";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "../components/shared/PrivateRoute";
import VolunteerDetails from "../components/VolunteerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allVolunteer",
        element: <AllVolunteer></AllVolunteer>,
      },
      {
        path: "/volunteerDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/volunteers`);
          const datas = await res.json();
          const singleData = datas.find((data) => data._id == params.id);
          return singleData;
        },
        element: (
          <PrivateRoute>
            <VolunteerDetails></VolunteerDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addVolunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
