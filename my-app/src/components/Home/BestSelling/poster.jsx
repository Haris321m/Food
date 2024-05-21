import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Fries_Content from './Fries';
import Fries_Cards from './Fries-card';
import Drink_Content from './Drink';
import Drink_Cards from './Drink-card';
import Beverage_Content from './beverage';
import Beverage_Cards from './beverage-card';
import AddOneData_Content from './addonedata';
import AddOneData_Cards from './addonedata-card';

function Poster({ card, onClose, onAddToCart }) {
  const [count, setCount] = useState(1);
  const [dropdowns, setDropdowns] = useState({
    fries: false,
    drink: false,
    beverage: false,
    addOnes: false
  });

  function toggleDropdown(section) {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [section]: !prevDropdowns[section]
    }));
  }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="relative bg-darkgreen rounded-xl flex flex-col lg:flex-row w-full max-w-5xl h-full max-h-[90%] p-5 overflow-auto">
        <button 
          className="absolute top-2 right-2 text-white bg-green-900 p-2 rounded-full" 
          onClick={onClose}
        >
          <ImCross />
        </button>
        <div className="left w-full lg:w-1/2 px-5">
          <div className="dropdown">
            <h1
              className='text-left rounded-tl-xl rounded-tr-xl bg-green-900 mt-5 px-5 py-6 font-medium text-xl text-white flex justify-between items-center cursor-pointer'
              onClick={() => toggleDropdown('fries')}
            >
              Fries {dropdowns.fries ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h1>
            {dropdowns.fries && <div className='bg-white p-5'>
              {Fries_Content.map((item, index) => (
                <Fries_Cards key={index} img={item.img} title={item.title} price={item.price} />
              ))}
            </div>}
          </div>

          <div className="dropdown">
            <h1
              className='text-left rounded-tl-xl rounded-tr-xl bg-green-900 mt-5 px-5 py-6 font-medium text-xl text-white flex justify-between items-center cursor-pointer'
              onClick={() => toggleDropdown('drink')}
            >
              Drink {dropdowns.drink ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h1>
            {dropdowns.drink && <div className='bg-white p-5'>
              {Drink_Content.map((item, index) => (
                <Drink_Cards key={index} img={item.img} title={item.title} price={item.price} />
              ))}
            </div>}
          </div>

          <div className="dropdown">
            <h1
              className='text-left rounded-tl-xl rounded-tr-xl bg-green-900 mt-5 px-5 py-6 font-medium text-xl text-white flex justify-between items-center cursor-pointer'
              onClick={() => toggleDropdown('beverage')}
            >
              Beverage {dropdowns.beverage ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h1>
            {dropdowns.beverage && <div className='bg-white p-5'>
              {Beverage_Content.map((item, index) => (
                <Beverage_Cards key={index} img={item.img} title={item.title} price={item.price} />
              ))}
            </div>}
          </div>

          <div className="dropdown">
            <h1
              className='text-left rounded-tl-xl rounded-tr-xl bg-green-900 mt-5 px-5 py-6 font-medium text-xl text-white flex justify-between items-center cursor-pointer'
              onClick={() => toggleDropdown('addOnes')}
            >
              Add Ones {dropdowns.addOnes ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h1>
            {dropdowns.addOnes && <div className='bg-white p-5'>
              {AddOneData_Content.map((item, index) => (
                <AddOneData_Cards key={index} img={item.img} title={item.title} price={item.price} />
              ))}
            </div>}
          </div>
        </div>

        <div className="right w-full lg:w-1/2 flex flex-col justify-between mt-5 lg:mt-0">
          <div className="poster w-full aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-9">
            <img src={card.img} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="CardDetails w-full bg-black bg-opacity-70 text-white p-5 rounded-xl mt-5">
            <h1 className="text-xl font-bold">{card.title}</h1>
            <p className='font-medium'>{card.additional}</p>
            <p>Price: {card.price}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button onClick={increase} className='px-5 py-3 rounded-xl text-white bg-green-900 font-bold text-2xl'>+</button>
            <h1 className='text-2xl font-bold px-5'>{count}</h1>
            <button onClick={decrease} className='px-5 py-3 rounded-xl text-white bg-green-900 font-bold text-2xl'>-</button>
          </div>
          <button
            className='mt-5 px-10 py-3 bg-green-900 text-white font-bold rounded-xl'
            onClick={onAddToCart}
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Poster;
