import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
const Header=()=>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
          </Nav>
          <i class="fa-solid fa-cart-shopping text-light"></i>
        </Container>
      </Navbar>
        </>
    )

}
export default Header