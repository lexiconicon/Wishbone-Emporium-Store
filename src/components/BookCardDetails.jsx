import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function BookCardDetails({item, addToCart}) {

  //set state for detail modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = () => {
    addToCart(item);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        View Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', marginBottom: '1rem'}}
            />
            <h5>{item.author}</h5>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BookCardDetails;
