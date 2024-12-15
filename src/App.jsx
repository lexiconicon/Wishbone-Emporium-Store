import './App.css'
import AppRouter from './components/AppRouter'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MyNavbar from './components/myNavbar'


function App() {

  //setting up state
  const [items,setItems] = useState([]);
  const [cart,setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  //function for favoriting/unfavoriting
  const toggleFavorite = (book) => {
    setWishlist((prev) => {
      //checks to see if book is already in the wishlist
      const isAlreadyInWishlist = prev.some((fav) => fav.id === book.id);
      //if it is, clicking the button removes it
      if (isAlreadyInWishlist) {
        return prev.filter((fav) => fav.id !== book.id);
      } else {
      //if it's not, clicking the button adds it to the list
        return [...prev, book];
      }
    });
  };

   //function to add book to cart
  const addToCart = (item) => {
    setCart((prev) => {
      // Check if the item is already in the cart
      const existingItem = prev.find((cartItem) => cartItem.item.id === item.id);
  
      if (!existingItem) {
        // If the item doesn't exist in the cart, add it
        return [...prev, { item: item }];
      }
      // If item already exists in the cart, do nothing
      return prev;
    });
  };

  //function to remove book from cart
  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.item.id !== item.id));
  };
    
  //fetch from JSON file
  useEffect(() => {
    const getItems = async () => {
      let res = await axios.get('http://localhost:3000/items')
      setItems(res.data)
    }
    getItems();
  }, []);

  return (
    <div>
      <MyNavbar />
      <AppRouter 
        items={items} 
        setCart={setCart} 
        cart={cart} 
        wishlist={wishlist} 
        setWishlist={setWishlist} 
        toggleFavorite={toggleFavorite} 
        removeFromCart={removeFromCart} 
        addToCart={addToCart}
      />
    </div>
  )
}

export default App;
