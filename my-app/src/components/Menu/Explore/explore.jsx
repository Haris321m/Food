import React from 'react';
import Content from './list';
import Cards from './cards';

function Explore({ addToCart }) {
  return (
    <>
      <h1 className="text-4xl font-bold">EXPLORE MENU</h1>
      <div className="explore grid grid-cols-3 gap-10">
        {Content.map((item, index) => (
          <Cards key={index} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Explore;
