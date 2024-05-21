import React, { useContext } from 'react';
import Content from './list';
import Cards from './cards';
import { CartContext } from '../../cart/CartContent';

function Explore() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">EXPLORE MENU</h1>
      <div className="explore grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {Content.map((item, index) => (
          <Cards key={index} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Explore;
