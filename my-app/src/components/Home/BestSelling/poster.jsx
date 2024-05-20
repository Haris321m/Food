// Poster.js
import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

function Poster({ img, onClose, onAddToCart }) {
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="poster-main absolute bg-darkgreen z-10 ml-60 top-72 rounded-xl flex">
      <div className="left mt-10 ml-5">
        <div className="Fries w-72 text-left bg-green-900 p-4 mt-5 font-bold text-white flex justify-between hover:cursor-pointer"><h1>Fries</h1> <h2 className='flex'>(Required) <IoIosArrowDown /></h2></div>
        <div className="Drink w-72 text-left bg-green-900 p-4 mt-5 font-bold text-white flex justify-between hover:cursor-pointer"><h1>Drink</h1> <h2 className='flex'>(Required) <IoIosArrowDown /></h2></div>
        <div className="Beverage w-72 text-left bg-green-900 p-4 mt-5 font-bold text-white flex justify-between hover:cursor-pointer"><h1>Beverage</h1> <h2 className='flex'>(Required) <IoIosArrowDown /></h2></div>
        <div className="Add-Ones w-72 text-left bg-green-900 p-4 mt-5 font-bold text-white flex justify-between hover:cursor-pointer"><h1>Add Ones</h1> <h2 className='flex'>(Required) <IoIosArrowDown /></h2></div>
      </div>
      <div className="right p-5 pt-3">
        <button className='relative top-0 ml-80 text-white bg-green-900 p-5 rounded-xl' onClick={onClose}><ImCross /></button>
        <div className="poster w-96 h-70% object-cover">
          <img src={img} alt="" />
        </div>
        <div className="btn flex py-5 ml-28">
          <button onClick={increase} className='px-5 py-3 rounded-xl text-white bg-green-900 font-bold text-2xl text-center'>+</button>
          <h1 className='text-2xl font-bold px-5 py-3'>{count}</h1>
          <button onClick={decrease} className='px-5 py-3 rounded-xl text-white bg-green-900 font-bold text-2xl text-center'>-</button>
        </div>
        <button 
          className='px-10 py-3  bg-green-900 text-white font-bold lg:text-xl mg:text-md rounded-xl'
          onClick={() => onAddToCart({ img, count, price: 10 })} // Replace 10 with actual price if available
        >
          + Add Cart
        </button>
      </div>
    </div>
  );
}

export default Poster;
