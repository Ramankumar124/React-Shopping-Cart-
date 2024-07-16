import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";

import { CartContext } from "../Context/Context";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const {
    state: { cart ,product},
    dispatch,productDispatch
  } = useContext(CartContext);

const location=useLocation();
 const handleChange=(e)=>{
  productDispatch({
    type:"SEARCH",
    payload:e.target.value
  });

 }


  return (
    <>
      <Navbar bg="dark" variant="dark" className="h-20 flex ">
        <Container>
          <Navbar.Brand>Shoping Cart</Navbar.Brand>
         {location.pathname!=="/cart" && ( <Form.Control className="w-[40%]" placeholder="Enter product name" onChange={handleChange} />
)}
          <DropdownButton
            className="relative flex items-center justify-center   text-white rounded-md shadow-lg focus:outline-none mx-5 "
            as={ButtonGroup}
            id={`dropdown-button-drop-start`}
            drop="start"
            variant="success"
            title={
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="w-5 h-5" />
                <span>{cart.length}</span>
              </div>
            }
          >
         {cart.length ? (
  cart.map((pd) => (
    <Dropdown.Item
      key={pd.id} // Assuming each product has a unique `id`
      className="text-gray-700 h-[50px] w-[350px] mb-2"
    >
      <div className="flex justify-between items-center  ">
        <img
          className="w-[50px] h-[50px] rounded-md "
          src={pd.image}
          alt={pd.name}
        />
        <div>
          <p>{pd.name}</p>
          <p>₹{pd.price}</p>
        </div>
        <MdDelete className="text-2xl" onClick={()=>{
          dispatch({
            type:"REMOVE_FROM_CART",
            payload:pd
          })
        }} />
      </div>
    </Dropdown.Item>

  ))
  
) : (
  <Dropdown.Item className="text-gray-700 h-[50px] w-[300px] font-semibold">
    <div className="flex  items-center text-3xl">
      <h1 >cart is empty</h1>
    </div>
  </Dropdown.Item>
)}
{/* Add to Cart Button */}
<div className="flex items-center justify-center">
{cart.length > 0 && (
location.pathname!=="/cart"?(  <Link to='/cart'>  

  <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 m-2 rounded ">
  Go to Cart
  </button>
 </Link>):( <Link to='/'>  

  <button className="bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 m-2 rounded ">
  Go back TO home
  </button>
 </Link>)
)}
</div>

           
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
