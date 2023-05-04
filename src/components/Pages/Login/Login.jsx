import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthProvider";
const Login = () => {
  const { user, login, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
      })
      .catch((error) => setError(error.message));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
          <p className="py-6">
            to Show <span className=" font-semibold">Recipe</span>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center mx-auto border p-3 btn"
              >
                <FcGoogle />
                Log in with google
              </button>
            </div>
            <div>
              <button
                onClick={handleGithubLogin}
                className="flex items-center mx-auto border p-3 btn"
              >
                <BsGithub />
                Log in with Github
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="mt-3">
              Don't Have an Account?{" "}
              <Link className="text-blue-700" to="/register">
                Please Register
              </Link>
            </div>
          </div>
          <div className="text-center mt-1">
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
