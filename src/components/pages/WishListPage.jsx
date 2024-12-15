import React from 'react'
import { Container } from 'react-bootstrap';
import BookCard from '../BookCard';

function WishListPage({wishlist, toggleFavorite, setCart, addToCart}) {
  if (wishlist.length === 0) {
    return <p>Your wishlist is empty!</p>;
  }
  return (
    <Container className='wishlist'>
      {wishlist.map((item) => (
        <BookCard
          key={item.id}
          item={item}
          toggleFavorite={toggleFavorite}
          setCart={setCart}
          isFavorite={true}
          addToCart={addToCart}
        />
      ))}
    </Container>
  );
}

export default WishListPage;
