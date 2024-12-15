import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import WishListPage from './pages/WishListPage'

function AppRouter({items, setCart, cart, wishlist, setWishlist, toggleFavorite, removeFromCart, addToCart}) {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <HomePage 
            items={items} 
            setCart={setCart} 
            cart={cart} 
            removeFromCart={removeFromCart} 
            wishlist={wishlist} 
            setWishlist={setWishlist} 
            addToCart={addToCart} 
            toggleFavorite={toggleFavorite}/>} 
          />
        <Route path='/cart' element={
          <CartPage 
            cart={cart} 
            setCart={setCart} 
            removeFromCart={removeFromCart}/>} 
          />
        <Route path='/wishlist' element={
          <WishListPage 
          wishlist={wishlist} 
          setWishlist={setWishlist} 
          toggleFavorite={toggleFavorite} 
          addToCart={addToCart}/>} 
        />
      </Routes>
    </div>
  )
}

export default AppRouter;
