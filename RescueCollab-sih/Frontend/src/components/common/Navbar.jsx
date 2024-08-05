import React from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/Actions/authAction";

const Navbar = () => {
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
    <nav className="w-full z-10 relative bg-gray-800 h-20 flex items-center justify-between px-4 shadow-lg">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" width="45px" className="hidden md:block" />
        <p className="md:text-2xl sm:text-xl text-white font-Roberto font-bold">
          RescueCollab
        </p>
      </Link>

      {/* Container for Links and Buttons */}
      <div className="flex flex-grow items-center justify-between md:justify-center gap-4">
        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex md:gap-6">
          {Links.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className="text-white font-bold hover:text-indigo-500 duration-200"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-4">
          {!state.isLoggedin && (
            <NavLink to="/signup">
              <button className="bg-indigo-500 hover:bg-indigo-600 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300">
                Sign Up
              </button>
            </NavLink>
          )}

          {state.isLoggedin && (
            <NavLink to="/profile">
              <button className="bg-indigo-500 hover:bg-indigo-600 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300">
                Profile
              </button>
            </NavLink>
          )}

          {state.isLoggedin ? (
            <button
              className="bg-indigo-500 hover:bg-indigo-600 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="bg-indigo-500 hover:bg-indigo-600 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
