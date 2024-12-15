import React from 'react'
import Modal from 'react-bootstrap/Modal';

function CartAlert({ show, handleClose }) {
  return (
 <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Added to Cart!</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  )
}

export default CartAlert
