import React, { useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../api/user.api";
import { logout } from "../store/slice/authSlice";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { location } = useRouterState();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isDashboardPage = location.pathname === "/dashboard";

  const showSignInButton = isHomePage && !isAuthenticated;
  const showDashboardButton = isAuthenticated && !isDashboardPage;
  const showLogoutButton = isAuthenticated && isDashboardPage;

  const handleSignInClick = () => navigate({ to: "/auth" });
  const handleDashboardClick = () => navigate({ to: "/dashboard" });
  const handleHomeClick = () => navigate({ to: "/" });
  const handleContactClick = () => navigate({ to: "/contact" });

  const handleLogoutClick = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/" });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={handleHomeClick}
            >
              <svg
                className="h-8 w-8 text-blue-600 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 2C13.5 2.55 13.05 3 12.5 3H11.5C10.95 3 10.5 2.55 10.5 2C10.5 1.45 10.95 1 11.5 1H12.5C13.05 1 13.5 1.45 13.5 2Z" />
                <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
                <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
              </svg>
              <span className="text-blue-600 font-bold text-xl">
                URL Shortener
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/features"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  location.pathname === "/features"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                Features
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  location.pathname === "/about"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center">
            {showSignInButton && (
              <button
                onClick={handleSignInClick}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign In
              </button>
            )}
            {showDashboardButton && (
              <button
                onClick={handleDashboardClick}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Dashboard
              </button>
            )}
            {showLogoutButton && (
              <button
                onClick={handleLogoutClick}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            )}
            <button
              onClick={handleContactClick}
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <button
            onClick={() => navigate({ to: "/features" })}
            className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
          >
            Features
          </button>
          <button
            onClick={() => navigate({ to: "/about" })}
            className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
          >
            About Us
          </button>
          <button
            onClick={handleContactClick}
            className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
          >
            Contact Us
          </button>

          <div className="pt-4 pb-3 border-t border-gray-200">
            {showSignInButton && (
              <button
                onClick={handleSignInClick}
                className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-blue-600 hover:bg-gray-50"
              >
                Sign In
              </button>
            )}
            {showDashboardButton && (
              <button
                onClick={handleDashboardClick}
                className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-blue-600 hover:bg-gray-50"
              >
                Dashboard
              </button>
            )}
            {showLogoutButton && (
              <button
                onClick={handleLogoutClick}
                className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-red-600 hover:bg-gray-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
