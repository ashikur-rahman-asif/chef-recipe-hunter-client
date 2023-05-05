import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(photoUrl,name)

    if (password < 6) {
      setError("Password must be 6 characters long");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("please at least one number in password");
      return;
    } else if (password !== confirm) {
      setError("Your password not matched");
      return;
    }

    if (
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        photoUrl
      )
    ) {
      setError("Url is not correct format");
      return;
    } else {
      setError("");
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        setSuccess("User has registered successfully");
        logOut()
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        navigate('/login');
      })
      .catch((error) => {
        setError(error.message);
      });
   
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up to Becipe</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo_url"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  name="confirm"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="mt-3">
              Already have an Account?{" "}
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </div>
          </div>
          <div className="text-center mb-2">
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
