import React, { useState, useRef } from 'react';
import Explore from './Explore/explore';
import Promotions from './Promotions/Promotions';
import SignatureBoxes from './SignatureBoxes/SignatureBoxes';
import Sharing from './Sharing/Sharing';
import SnacksBeverages from './Snacks-&-Beverages/Snacks-&-Beverages';

function Menu() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const exploreRef = useRef(null);
  const promotionsRef = useRef(null);
  const signatureBoxesRef = useRef(null);
  const snacksBeveragesRef = useRef(null);
  const sharingRef = useRef(null);
  const midnightRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 20, // Adjusting the offset for better alignment
        behavior: 'smooth'
      });
    }
  };

  const parsePrice = (price) => {
    // Ensure price is a string and remove 'Rs ' prefix, then parse to an integer
    if (typeof price === 'string') {
      const parsedPrice = parseInt(price.replace('Rs ', ''), 10);
      if (!isNaN(parsedPrice)) {
        return parsedPrice;
      }
    }
    console.error('Error parsing price:', price);
    return 0;
  };

  const addToCart = (item) => {
    const itemPrice = parsePrice(item.price);
    setCartItems([...cartItems, item]);
    setTotalPrice((prevTotal) => prevTotal + itemPrice);
    console.log(`Added item: ${item.title}, Price: ${itemPrice}, Total Price: ${totalPrice}`);
  };

  const removeFromCart = (index) => {
    const item = cartItems[index];
    const itemPrice = parsePrice(item.price);
    setCartItems(cartItems.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - itemPrice);
    console.log(`Removed item: ${item.title}, Price: ${itemPrice}, Total Price: ${totalPrice}`);
  };

  return (
    <>
      <div className="nav grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full m-auto list-none px-5 gap-5 mt-5">
        <li onClick={() => scrollToSection(exploreRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Everyday Value</li>
        <li onClick={() => scrollToSection(promotionsRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Promotions</li>
        <li onClick={() => scrollToSection(signatureBoxesRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Signature Boxes</li>
        <li onClick={() => scrollToSection(snacksBeveragesRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Snacks & Beverages</li>
        <li onClick={() => scrollToSection(sharingRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Sharing</li>
        <li onClick={() => scrollToSection(midnightRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Midnight (Start at 12 am)</li>
      </div>
      <div className="main flex flex-col lg:flex-row mt-10 w-full">
        <div className="left w-full lg:w-2/3">
          <Explore ref={exploreRef} addToCart={addToCart} />
          <Promotions ref={promotionsRef} addToCart={addToCart} />
          <SignatureBoxes ref={signatureBoxesRef} addToCart={addToCart} />
          <Sharing ref={sharingRef} addToCart={addToCart} />
          <SnacksBeverages ref={snacksBeveragesRef} addToCart={addToCart} />
        </div>
        <div className="right w-full lg:w-1/3 mt-10 lg:mt-0 lg:pl-10">
          <div className="items bg-darkgreen sticky top-0 p-5">
            <h1 className="border-b-2 border-black p-2">{cartItems.length} item(s) added</h1>
            <div className="item h-96 overflow-auto">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between p-2 border-b-2 border-green-900">
                  <img src={item.img} alt={item.title} className="w-16 h-16" />
                  <div>
                    <h2>{item.title}</h2>
                    <p>Rs. {item.price}</p>
                  </div>
                  <button
                    className="bg-red-500 text-white py-1 px-2 h-12 rounded-lg font-bold"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="footer bg-green-900 flex justify-between p-5 text-white">
              <h2 className="font-bold">Rs {totalPrice}</h2>
              <button className="px-4 py-2 bg-darkgreen rounded-lg font-bold hover:bg-green-500">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
