import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap';
import BookCardDetails from './BookCardDetails';
import CartAlert from './CartAlert';

function BookCard({item, setCart, isInCart = false, toggleFavorite, isFavorite, removeFromCart, addToCart}) {

  //set state for the 'added to cart' modal
  const [showModal, setShowModal] = useState(false);

  //close modal using state
  const handleCloseModal = () => setShowModal(false);

  //error handling if empty/undefined
  if (!item) {
    return <div>No book information available</div>
  }

  //deconstructs the properties of item
  const {title, author, price, img} = item;

  //both adds book to cart with addToCart function and toggles the modal
  const handleAddToCart = () => {
    addToCart(item);
    setShowModal(true);
  }

  //function to add/remove book from wishlist
  const handleFavorite = () => {
    toggleFavorite(item);
  };

  return ( 
    //using bootstrap Card for styling the cards; creating a separate style for cards in cart
    <Card className={`bookCard ${isInCart ? 'cartStyle' : ''}`}>
      <Card.Body className='d-flex flex-column'>

        {/* cart alert modal */}
        <CartAlert show={showModal} handleClose={handleCloseModal}></CartAlert>

        <Card.Img 
    variant="top" 
    src={img} 
    style={{height: '425px', objectFit: 'cover'}}
  />

      {/*   <div className='bookPhoto'>
          <img src={img} alt={title} />
        </div> */}
        <div>
          <Card.Title className='text-truncate'>{title}</Card.Title>
          <Card.Text className='text-muted mb-2'>{author}</Card.Text>
          <Card.Text>${price.toFixed(2)}</Card.Text>
        </div>
        {!isInCart ? (
          <div className='buttonDiv d-flex align-items-center justify-content-center gap-2'>
            <Button variant='outline-primary' onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant='outline-danger' onClick={handleFavorite}>
              {/* Defines appearance for favorite/unfavorite with ternary operator */}
              {isFavorite ? '❤️' : '🖤'}
            </Button>
            <BookCardDetails item={item} setCart={setCart} addToCart={addToCart}/>
          </div>
        ): (
          <Button variant='danger' onClick={() => removeFromCart(item)}>
            Remove from Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
        

export default BookCard;
