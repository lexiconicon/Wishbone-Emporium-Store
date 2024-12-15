import React from 'react'
import BookCard from './BookCard'
import { Container} from 'react-bootstrap'

function Cart({cart, setCart, removeFromCart}) {
  const showCart = cart.map(cartItem =>
     <BookCard 
      item={cartItem.item} 
      setCart={setCart} 
      key={cartItem.item.id} 
      isInCart={true} 
      removeFromCart={removeFromCart}
    />)
return (
  <Container className='cart'>
      <h2>Your Cart</h2>
    {showCart}
  </Container>
)
}

export default Cart;