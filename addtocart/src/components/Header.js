import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import {NavLink} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

  export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <>
      <Navbar bg="dark" variant="dark"style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
        
          </Nav>
          <Badge badgeContent={4} color="primary"
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
          >
          <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:"pointer"}}></i>
          </Badge>
        </Container>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
        <i className='fas fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
        <p style={{fontSize:20}}>Your Cart is Empty</p>
        <img src="https://raw.githubusercontent.com/harsh17112000/react_redux_cart_youtube/main/public/cart.gif" className='emptycart_img' alt="cart.gif" style={{width:"5rem",padding:10}}/>
        </div>
      </Menu>
      </Navbar>
      
    </>
  );
}

