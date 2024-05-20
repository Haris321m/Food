// BestSelling.js
import React, { useState, useContext } from "react";
import Content from "./list.js";
import Cards from './cards';
import Poster from './poster.jsx';
import { CartContext } from '../../cart/CartContent.jsx';

function BestSelling() {
  const [selected, setSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleImgClick = (imageSrc) => {
    console.log("Clicked image source:", imageSrc);
    setSelected(imageSrc);
    setIsVisible(true);
  };

  const handleClosePoster = () => {
    setIsVisible(false);
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, count: 1 }); // Initial count is 1
    setIsVisible(false);
  };

  return (
    <div className="text-center relative">
      <h1 className="text-center lg:mt-52 md:mt-32 text-5xl font-medium border-b-8 pb-3 border-green-900 inline-block">Best Selling</h1>
      <div className="BestSelling grid lg:grid-cols-3 md:grid-cols-2 px-20 gap-10 mt-10 text-left">
        {Content.map((status, index) => (
          <Cards
            key={index}
            img={status.img}
            title={status.title}
            aditional={status.aditional}
            price={status.price}
            onClick={() => handleImgClick(status.img)}
          />
        ))}
      </div>
      {isVisible && <Poster img={selected} onClose={handleClosePoster} onAddToCart={handleAddToCart} />}
    </div>
  );
}

export default BestSelling;
