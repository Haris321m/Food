// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContent';

function Cart() {
  const { cart, totalPrice, removeItem } = useContext(CartContext);

  return (
    <div className='bg-darkgreen rounded-xl w-80% m-auto p-5 my-10 '>
      <div className="header">{cart.length} items</div>
      <div className="main h-96 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="cart-item flex mt-4">
            <img src={item.img} alt="item" className="w-32 h-32" />
            <div className="item-details text-2xl ml-5">
              <p>{item.title}</p>
              <p>{item.count} x Rs{item.price}</p>
              <button 
                className="remove-button bg-red-500 text-white px-4 py-2 mt-2 rounded"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <h1>Rs {totalPrice}</h1>
        <button className="proceed-button bg-blue-500 text-white px-4 py-2 mt-2 rounded">
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Cart;
