import React from 'react'
import { Container } from 'react-bootstrap'
import Cart from '../Cart'
import CartSummary from '../CartSummary';

function CartPage({cart, setCart, removeFromCart}) {
  return (
    <Container className="cartPage">
      <h1>Your Shopping Cart</h1>
      <Cart 
        cart={cart} 
        setCart={setCart} 
        removeFromCart={removeFromCart} 
      />
      <div>
        <CartSummary cart={cart} />
      </div>
    </Container>
  );
}

export default CartPage;
