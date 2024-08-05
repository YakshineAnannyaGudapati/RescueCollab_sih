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
    <nav className="w-full bg-gray-800 h-20 flex items-center justify-between px-4 shadow-lg">
      <div className="flex items-center w-full">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" width="45px" className="hidden md:block" />
          <p className="text-2xl text-white font-bold">RescueCollab</p>
        </Link>

        {/* Links and Buttons */}
        <div className="flex-1 flex items-center justify-center md:justify-between gap-4">
          {/* Links */}
          <div className="hidden md:flex md:items-center md:gap-6">
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

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {!state.isLoggedin && (
              <NavLink to="/signup">
                <button className="bg-indigo-500 hover:bg-indigo-600 font-bold text-white rounded-full px-4 py-2 duration-300">
                  Sign Up
                </button>
              </NavLink>
            )}

            {state.isLoggedin && (
              <NavLink to="/profile">
                <button className="bg-indigo-500 hover:bg-indigo-600 font-bold text-white rounded-full px-4 py-2 duration-300">
                  Profile
                </button>
              </NavLink>
            )}

            {state.isLoggedin ? (
              <button
                className="bg-indigo-500 hover:bg-indigo-600 font-bold text-white rounded-full px-4 py-2 duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <button className="bg-indigo-500 hover:bg-indigo-600 font-bold text-white rounded-full px-4 py-2 duration-300">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
