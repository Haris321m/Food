import React, { useState } from 'react';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SideBar from './side-bar';
import Logo from './imgs/logo.png';

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      {isOverlayVisible && (
        <div 
          className="overlay w-full h-full fixed top-0 left-0 bg-black opacity-50 z-10" 
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="nav flex justify-between items-center bg-green-900 text-white px-10">
        <div className="logo flex items-center">
          <button onClick={toggleSidebar}>
            <HiMiniBars3CenterLeft className="text-3xl cursor-pointer hover:text-[greenyellow] font-bold" />
          </button>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-20 ml-5" />
          </Link>
        </div>
        <div className="nav-burger lg:hidden md:block sm:block">
          <FaBars className="text-2xl cursor-pointer" />
        </div>
        <div className="ul hidden lg:flex">
          <Link to="/" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Home</Link>
          <Link to="/menu" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Menu</Link>
          <Link to="/deals" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Deals</Link>
          <Link to="/contact" className="list-none ml-10 hover:text-[greenyellow] cursor-pointer font-medium text-xl">Contact</Link>
        </div>
        <div className="btn flex items-center">
          <button className="p-3 border-3 border-[greenyellow] rounded-xl text-xl hover:bg-green-700 transition">
            <BsCart />
          </button>
          <Link to="/login">
            <button className="px-4 py-2 border-3 border-[greenyellow] rounded-xl text-xl ml-5 hover:bg-green-700 transition">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
      <SideBar isVisible={isSidebarVisible} />
    </>
  );
}

export default Header;
