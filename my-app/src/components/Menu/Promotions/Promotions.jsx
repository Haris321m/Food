import React from 'react';
import Content from './list';
import Cards from './cards';

function Promotions() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-10 mb-5">Promotions</h1>
      <div className="promotions grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {Content.map((status, index) => (
          <Cards 
            key={index}
            img={status.img}
            title={status.title}
            description={status.description}
            price={status.price}
          />
        ))}
      </div>
    </>
  );
}

export default Promotions;
