import { Link } from "react-router";

const Header = () => {
  const navLinks = (
    <>
      <Link className="mx-4" to="/">
        Home
      </Link>
      <Link className="mx-4" to="/find-a-job">
        Find a Job
      </Link>
      <Link className="mx-4" to="/recruiters">
        Recruiters
      </Link>
      <Link className="mx-4" to="/candidates">
        Candidates
      </Link>
      <Link className="mx-4" to="/contact">
        Contact
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3.5">
          <Link to="/register">Register</Link>
          <Link to="/signin" className="btn bg-blue-600 text-white">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
