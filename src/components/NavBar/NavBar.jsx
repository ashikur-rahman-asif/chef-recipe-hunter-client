import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut  } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
    .catch(error=>setError(error.message))
  }
  return (
    <div className="nav-container">
      <div className="relative flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-2 justify-center items-center">
            <p className="text-2xl md:text-4xl font-extrabold">Becipe</p>
          </div>
        </Link>
        <ul className="items-center  hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>

        <div className="md:flex">
          <div className="flex">
          <>
            {user ? (
              <>
                {user.photoURL && (
                  <img title={user.displayName}
                    className="max-h-12 max-w-full rounded-full"
                    src={user?.photoURL}
                    alt={user.displayName}
                  />
                )}
                <button onClick={handleLogOut} className="ml-5 btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white">Login</button>
              </Link>
            )}
          </>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-6 h-6 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="text-xl  font-bold tracking-wide text-gray-800 uppercase">
                        Becipe
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blogs"
                        className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
