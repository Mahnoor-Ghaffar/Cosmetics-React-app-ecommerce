import React, { useState } from "react";
import {
  HiSearch,
  HiHeart,
  HiShoppingCart,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import { setUserDetails } from '../store/userSlice';
import { useRef } from "react";
// import ROLE from '../common/role';


const Navbar = () => {
  const user = useSelector(state => state?.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // State for user dropdown
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Logout function with error handling
  const handleLogout = async () => {
    try {
      const fetchData = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include'
      });

      const data = await fetchData.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        navigate("/");
      }

      if (data.error) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred during logout. Please try again.");
      console.error("Logout error:", error);
    }
  };

  // Close mobile menu when a link is clicked
  const handleMobileMenuClick = () => {
    setIsHamburgerOpen(false);
  };

  //-------------for user icon dropdown
  const dropdownRef = useRef(null);
  const handleUserIconClick = () => {
    setIsUserDropdownOpen((prev) => !prev); // Toggle dropdown on click
  };

  const closePopup = () => {
    setIsUserDropdownOpen(false); // Close the popup
  };

  // const handleLoginClick = (event) => {
  //   event.stopPropagation(); // Stop event propagation to prevent parent div's onClick from interfering
  // };


  return (
    <nav className="bg-pink-700 border-b shadow-md p-5">
      <div className="flex items-center justify-between space-x-4 md:space-x-8">
        {/* Left Section: Dropdown */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer text-sm text-white"
            >
              United States (US) | en
              <span
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </span>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-48">
                <li className="p-2 text-black hover:bg-gray-100">United States (US)</li>
                <li className="p-2 text-black hover:bg-gray-100">Canada (CA)</li>
                <li className="p-2 text-black hover:bg-gray-100">Mexico (MX)</li>
              </ul>
            )}
          </div>
        </div>

        {/* Center Section: Logo */}
        <div className="flex-1 text-center">
          <span className="text-2xl font-semibold text-white">Hudabeauty</span>
        </div>

        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <HiSearch onClick={toggleSearch} className="text-xl cursor-pointer text-white" />
          <HiHeart className="text-xl cursor-pointer text-white" />
          <HiShoppingCart className="text-xl cursor-pointer text-white" />

          {/* Search Bar Below Icon */}
          {isSearchOpen && (
            <div className="absolute top-10 right-0 bg-white p-2 w-64 shadow-md rounded-md flex items-center border border-gray-300 mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 text-sm focus:outline-none"
              />
              <HiSearch className="text-pink-700 ml-2 cursor-pointer" />
            </div>
          )}


{/* -------------User Icon------------ */}

<div
      className="relative flex justify-center z-10"
      ref={dropdownRef}
      onMouseEnter={() => setIsUserDropdownOpen(true)}
    >

    {
        user?._id && (
      <div onClick={handleUserIconClick}>
        {user?.profilePic ? (
          <img
            src={user.profilePic}
            className="w-10 h-10 rounded-full cursor-pointer"
            alt={`Profile of ${user.name}`}
          />
        ) : (
          <Link to="/login">
            <FaRegCircleUser className="text-xl cursor-pointer text-white" />
          </Link>
        )}
      </div>
        )
      }

      {/* Admin Panel Pop-up */}
      {isUserDropdownOpen && (
        <div className="absolute bg-white top-12 h-fit p-2 shadow-lg rounded-md md:block">
          <nav>
            {/* {
              user?.role === ROLE.ADMIN && ( */}
                <Link
                to="/admin-panel/all-products"
                className="whitespace-nowrap block p-2 hover:bg-slate-100"
                onClick={closePopup}
              >
                Admin Panel
              </Link>
            {/* //   )
            // } */}
           
            <button
              onClick={closePopup}
              className="whitespace-nowrap block p-2 hover:bg-slate-100 w-full text-left"
            >
              Close
            </button>
          </nav>
        </div>
      )}
    </div>


          {/* Login/Logout Button */}
          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full text-pink-700 bg-white hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 rounded-full text-pink-700 bg-white hover:bg-gray-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>






        {/*---------------------------------- Hamburger Menu for Mobile ------------------------------- */}
        <div className="md:hidden flex items-center space-x-2 text-white">
          <HiMenu
            onClick={toggleHamburger}
            className={`text-2xl cursor-pointer ${isHamburgerOpen ? "hidden" : "block"}`}
          />
          <HiX
            onClick={toggleHamburger}
            className={`text-2xl cursor-pointer ${isHamburgerOpen ? "block" : "hidden"}`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isHamburgerOpen && (
        <div className="md:hidden p-4 bg-white space-y-4">
          {/* Search Bar */}
          <div className="flex items-center border-b pb-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full text-sm p-2 border-b-2 border-pink-500 bg-pink-100 focus:outline-none"
            />
            <HiSearch className="text-xl text-pink-500 ml-2 cursor-pointer" />
          </div>

          {/* Menu Links */}
          <ul className="space-y-3 text-gray-800">
            <li className="cursor-pointer hover:text-pink-500" onClick={handleMobileMenuClick}>New</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={handleMobileMenuClick}>Best Sellers</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={handleMobileMenuClick}>Hudabeauty</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={handleMobileMenuClick}>Kyli</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={handleMobileMenuClick}>Wishfull</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={handleMobileMenuClick}>Gifts</li>
          </ul>

          {/* Profile Link */}
          <div className="flex justify-between items-center space-x-2">

            {/* Login/Logout Button */}
            <div>
              {user?._id ? (
                <p onClick={handleLogout} className="cursor-pointer hover:text-pink-500">
                  Logout
                </p>
              ) : (
                <Link to="/login" onClick={handleMobileMenuClick}>
                  <span className="cursor-pointer hover:text-pink-500">Login/Create Account</span>
                </Link>
              )}
            </div>

            {/* User Profile */}
            <div>
              {user?.profilePic ? (
                <img
                  src={user.profilePic}
                  className="w-9 h-9 rounded-full"
                  alt={`Profile of ${user.name}`}
                />
              ) : (
                <Link to="/login" onClick={handleMobileMenuClick}>
                  <FaRegCircleUser className="text-xl" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;