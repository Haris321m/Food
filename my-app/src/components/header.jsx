import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SideBar from './side-bar';
import Logo from './imgs/logo.png';

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setIsOverlayVisible(!isOverlayVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      {isOverlayVisible && (
        <div
          className="overlay w-full h-full fixed top-0 left-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="nav flex justify-between items-center bg-green-900 text-white px-10 relative">
        <div className="logo flex items-center">
          <button onClick={toggleSidebar}>
            <HiMenuAlt3 className="text-3xl cursor-pointer hover:text-[greenyellow] font-bold" />
          </button>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-20 ml-5" />
          </Link>
        </div>
        <div className="ul hidden lg:flex">
          <Link to="/" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Home</Link>
          <Link to="/menu" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Menu</Link>
          <Link to="/deals" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Deals</Link>
          <Link to="/contact" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Contact</Link>
        </div>
        <div className="btn flex items-center">
          <Link to="/cart">
            <button className="p-3 border-3 border-[greenyellow] rounded-xl text-xl hover:bg-green-700 transition">
              <BsCart />
            </button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-2 border-3 border-[greenyellow] rounded-xl text-xl ml-5 hover:bg-green-700 transition">
              LOGIN
            </button>
          </Link>
          <button onClick={toggleDropdown} className="lg:hidden text-3xl ml-5">
            <FaBars />
          </button>
        </div>
        {isDropdownVisible && (
          <div className="dropdown absolute right-0 top-full bg-green-900 text-white mt-2 p-5  rounded-md">
            <Link to="/" className="block py-2 hover:text-[greenyellow] cursor-pointer">Home</Link>
            <Link to="/menu" className="block py-2 hover:text-[greenyellow] cursor-pointer">Menu</Link>
            <Link to="/deals" className="block py-2 hover:text-[greenyellow] cursor-pointer">Deals</Link>
            <Link to="/contact" className="block py-2 hover:text-[greenyellow] cursor-pointer">Contact</Link>
          </div>
        )}
      </div>
      <SideBar isVisible={isSidebarVisible} />
    </>
  );
}

export default Header;
