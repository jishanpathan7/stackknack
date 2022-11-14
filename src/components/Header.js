import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Header = () => {
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
                    <Badge></Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 370}}>
                  <span className='text-center' style={{
                     padding: 10,
                  }}>Your Cart is Empty</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
   </Container>
    </Navbar>
  )
}

export default Header