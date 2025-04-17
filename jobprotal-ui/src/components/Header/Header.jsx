import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../auth/context/AuthContext/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);

  const navLinks = (
    <>
      <Link className="mx-4 text-base font-bold" to="/">
        Home
      </Link>
      <Link className="mx-4 text-base font-bold" to="/find-a-job">
        Find a Job
      </Link>
      <Link className="mx-4 text-base font-bold" to="/recruiters">
        Recruiters
      </Link>
      <Link className="mx-4 text-base font-bold" to="/candidates">
        Candidates
      </Link>
      <Link className="mx-4 text-base font-bold" to="/contact">
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
          <Link className="btn btn-ghost text-xl">JobProtal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3.5">
          {user ? (
            <>
              <div className="flex items-center gap-5">
                <p className="text-base font-bold">{user.displayName}</p>
                <button onClick={logout} className="btn bg-red-600 text-white">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn bg-blue-600 text-white">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
