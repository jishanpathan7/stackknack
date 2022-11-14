import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {
  const {state: {cart},dispatch} = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{
        height: '80px'
    }}>
   <Container>
        <Navbar.Brand>
          <Link to="/">
            Stack Knack
          </Link>
        </Navbar.Brand>
        <Navbar.Text>
            <FormControl style={{
                width: 400,
            }}
            placeholder="Search a Product..."
            className='m-auto'
            />
        </Navbar.Text>
        <Nav>
            <Dropdown>
                <Dropdown.Toggle variant='success' >
                    <FaShoppingCart color='white' fontSize={"25px"}/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 370}}>
                  {
                    cart.length > 0 ? (
                      <>
                      {cart.map((product) => (
                        <span className='cartitem' key={product.id}>
                          <img src={product.image} 
                          className='cartitem__image'
                          alt={product.name} />
                          <div>
                            <span>{product.name}</span>
                            <span>₹{product.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                          fontSize='20px'
                          style={{cursor: 'pointer'}}
                          onClick={() => dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product
                          })}
                          />
                        </span>
                      ))}
                 
                      </>
                    ) : (
                      <span className='text-center' style={{
                        padding: 10,
                     }}>Your Cart is Empty</span>
                    )
                  }
                
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
   </Container>
    </Navbar>
  )
}

export default Header