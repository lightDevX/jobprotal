import Lottie from "react-lottie";
import { Link } from "react-router";
import registerAnimation from "../../assets/lottie/register.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: registerAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("click from register", name, email, password);
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold">Register Now!</h2>
              <form className="fieldset" onSubmit={handleRegister}>
                <label className="fieldset-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your name"
                />
                <label className="fieldset-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <Link to="/login" className="link link-hover">
                    You are already register{" "}
                    <span className="font-bold underline">Login</span>
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
