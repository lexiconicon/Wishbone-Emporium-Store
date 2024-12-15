import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function MyNavbar() {
  

  return (
    
      <div className='navBar'>
        <Link to='/'>
        <Button variant='light'>Home</Button>
        </Link>
        <Link to='/cart'>
        <Button className='mx-2' variant='light'>Cart</Button>
        </Link>
        <Link to='/wishlist'>
        <Button variant='light'>Wishlist</Button>
        </Link>
      </div>
  
  )
}

export default MyNavbar
