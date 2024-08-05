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
      {/* Left part with name and logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" width="45px" className="hidden md:block" />
        <p className="md:text-2xl sm:text-xl text-white font-Roberto font-bold">
          RescueCollab
        </p>
      </Link>

      {/* Mid part with links */}
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

      {/* Right part with login and logout buttons */}
      <div className="flex items-center gap-4">
        {/* Signup button */}
        {!state.isLoggedin && (
          <NavLink to="/signup" className="text-white font-bold hover:text-indigo-500 duration-200">
            Sign Up
          </NavLink>
        )}

        {/* Profile button */}
        {state.isLoggedin && (
          <NavLink to="/profile" className="text-white font-bold hover:text-indigo-500 duration-200">
            Profile
          </NavLink>
        )}

        {/* Login and Logout Button */}
        {state.isLoggedin ? (
          <button
            className="text-white font-bold hover:text-indigo-500 duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="text-white font-bold hover:text-indigo-500 duration-200">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
