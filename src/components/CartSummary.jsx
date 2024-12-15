import React from 'react'
import { Card } from 'react-bootstrap';

function CartSummary({cart}) {

    const totalPrice = cart.reduce((sum, cartItem) => sum + cartItem.item.price, 0);

    const totalItems = cart.length;

  return (
    <Card className='mt=20px'>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </Card>
  );
}

export default CartSummary
