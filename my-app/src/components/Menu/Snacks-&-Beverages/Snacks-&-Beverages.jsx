import React from 'react';
import Content from './list';
import Cards from './cards';

function content(status) {
  return (
    <Cards
      img={status.img}
      title={status.title}
      description={status.description}
      price={status.price}
    />
  );
}

function SignatureBoxes() {
  return (
    <>
      <h1 className='text-4xl font-bold mt-10 mb-5'>Snacks & Beverages</h1>
      <div className="signature-boxes grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Content.map((status, index) => (
          <React.Fragment key={index}>
            {content(status)}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default SignatureBoxes;
