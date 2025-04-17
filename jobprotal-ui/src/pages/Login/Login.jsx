import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router";
import registerAnimation from "../../assets/lottie/register.json";
import AuthContext from "../../auth/context/AuthContext/AuthContext";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: registerAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Login Now!</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label py-3.5">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label py-3.5">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-4">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <span className="mt-4 text-center text-sm">
                Not registered?{" "}
                <Link to="/register" className="link link-primary">
                  Register here
                </Link>
              </span>
            </form>
            <div className="form-control mt-4">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn bg-purple-300 text-white hover:bg-purple-400"
              >
                <FcGoogle className="h-6 w-6" /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
