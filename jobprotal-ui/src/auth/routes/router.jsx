import { createBrowserRouter } from "react-router";
import Root from "../../layouts/Root/Root";
import Candidates from "../../pages/Candidates/Candidates";
import Contact from "../../pages/Contact/Contact";
import FindAJob from "../../pages/FindAJob/FindAJob";
import Home from "../../pages/Home/Home";
import JobDetails from "../../pages/JobDetails/JobDetails";
import Login from "../../pages/Login/Login";
import Recruiters from "../../pages/Recruiters/Recruiters";
import Register from "../../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/recruiters",
        element: <Recruiters />,
      },
      {
        path: "/find-a-job",
        element: <FindAJob />,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
