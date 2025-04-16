import { useContext } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router";
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

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      await createUser(name, email, password);
      alert("Registration successful!");
      form.reset();
    } catch (err) {
      alert("Error: " + err.message);
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
            <h2 className="text-2xl font-bold">Register Now!</h2>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
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
                <label className="label">
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
              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <Link to="/login" className="mt-4 text-center text-sm">
                Already registered?{" "}
                <span className="link link-primary">Login here</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
