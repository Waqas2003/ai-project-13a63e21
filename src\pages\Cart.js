import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;