import { createBrowserRouter } from "react-router";
import Root from "../../layouts/Root/Root";
import Candidates from "../../pages/Candidates/Candidates";
import Contact from "../../pages/Contact/Contact";
import FindAJob from "../../pages/FindAJob/FindAJob";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Recruiters from "../../pages/Recruiters/Recruiters";
import Register from "../../pages/Register/Register";

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
    ],
  },
]);

export default router;
