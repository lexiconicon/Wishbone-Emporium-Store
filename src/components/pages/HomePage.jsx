import React, { useState } from 'react'
import Cart from '../Cart'
import BookList from '../BookList'
import GenreFilter from '../GenreFilter';
import SearchBar from '../SearchBar';

function HomePage({items, setCart, cart, wishlist, toggleFavorite, setWishlist, removeFromCart, addToCart}) {

  //setting state
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //filters books based on genre selected by the user and by search term
  const filteredBooks = items.filter(item => {
    const matchesGenre = selectedGenre ? item.genres.includes(selectedGenre) : true;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  })

  return (
    <div className='homeDiv'>
      <h2>
        <span className='store-icon'>📚</span>
          Wishbone Book Emporium
        <span className='store-icon'>📚</span>
      </h2>
      <div className='filterDiv'>
        <SearchBar 
          items={items} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
        <GenreFilter 
          genres={['Fantasy', 'Horror', 'Science Fiction']} 
          setSelectedGenre={setSelectedGenre} 
        />
      </div>
      <div className='mainDiv'>
        <div className='bookListContainer'>
          <BookList 
            items={filteredBooks} 
            setCart={setCart} 
            wishlist={wishlist} 
            toggleFavorite={toggleFavorite} 
            setWishlist={setWishlist}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        </div>
        <div className='cartContainer'>
          <Cart 
            cart={cart} 
            setCart={setCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
      
    </div>  
  )
}

export default HomePage;
