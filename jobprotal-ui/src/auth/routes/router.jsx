import { createBrowserRouter } from "react-router";
import Root from "../../layouts/Root/Root";
import Candidates from "../../pages/Candidates/Candidates";
import Contact from "../../pages/Contact/Contact";
import FindAJob from "../../pages/FindAJob/FindAJob";
import Home from "../../pages/Home/Home";
import Recruiters from "../../pages/Recruiters/Recruiters";
import Register from "../../pages/Register/Register";
import Signin from "../../pages/Signin/Signin";

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
        path: "/signin",
        element: <Signin />,
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
