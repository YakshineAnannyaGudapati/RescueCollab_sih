import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/Actions/authAction";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authLogout());
    navigate('/');
  };

  const Links = [
    { id: 1, name: "Resources", link: "/resources" },
    { id: 2, name: "Disasters", link: "/disasters" },
    { id: 3, name: "Agencies", link: "/agencies" },
    { id: 5, name: "Contact Us", link: "/contact" },
    { id: 6, name: "Alerts", link: "/alert" },
  ];

  return (
    <nav className="w-full z-10 relative bg-gray-800 h-20 flex items-center justify-center shadow-lg">
      <div className="w-11/12 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-2">
          <Link
            className="flex flex-row items-center justify-center gap-2"
            to="/"
          >
            <img src={logo} alt="logo" width="45px" className="hidden md:block" />
            <p className="md:text-2xl sm:text-xl text-white font-Roberto font-bold">
              RescueCollab
            </p>
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-6">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-white font-bold font-Roborto hover:text-indigo-500 duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {!state.isLoggedin && (
            <NavLink to="/signup">
              <button className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24">
                Sign Up
              </button>
            </NavLink>
          )}

          {state.isLoggedin && (
            <div>
              <NavLink to="/profile" className="nav-link">
                <button className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24">
                  Profile
                </button>
              </NavLink>
            </div>
          )}

          <div>
            {state.isLoggedin ? (
              <button
                className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="nav-link">
                <button className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-800">
          <ul className="flex flex-col items-center gap-4 p-4">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-white font-bold font-Roborto hover:text-indigo-500 duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {!state.isLoggedin && (
              <NavLink to="/signup">
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </button>
              </NavLink>
            )}
            {state.isLoggedin && (
              <NavLink to="/profile" className="nav-link">
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </button>
              </NavLink>
            )}
            {state.isLoggedin ? (
              <button
                className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="nav-link">
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </NavLink>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
