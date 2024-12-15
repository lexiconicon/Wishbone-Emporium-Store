import React, { useEffect } from 'react'
import BookCard from './BookCard'
import { Container } from 'react-bootstrap';

function BookList({items, setCart, wishlist, toggleFavorite, removeFromCart, addToCart}) {

  useEffect(() => {
    console.log('items', items)
  },[items]);

  if (!items || items.length === 0) {
    return <p> Loading... </p>;
  }

  const showItems = items.map((item) => (
    <BookCard 
      setCart={setCart} 
      key={item.id} 
      item={item} 
      toggleFavorite={toggleFavorite}
      isFavorite={wishlist.some((fav) => fav.id === item.id)} 
      removeFromCart={removeFromCart}
      addToCart={addToCart}
    />
  ));

  return (
    <Container className='bookList'>
      {items.length > 0 ? showItems : <p>Loading...</p>}
    </Container>
  )
}

export default BookList;
