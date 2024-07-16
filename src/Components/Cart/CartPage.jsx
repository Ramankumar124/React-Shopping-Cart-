import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { CartContext } from "../../Context/Context";
import CartSideBar from "./CartSideBar";
import Rating from "../Rating";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are loaded
import { MdDelete } from "react-icons/md";
import EmptyCart from "../../assets/EmptyCart.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SinglePdct from "./SinglePdct";
const CartPage = () => {
  const {
    state: { cart, product },
    dispatch,
  } = useContext(CartContext);
  const [dropinput, setdropinput] = useState(1);
  return (
    <>
      <div className="w-full h-full flex ">
        <div
          id="left"
          className="w-[70%] h-full  flex flex-col items-center p-4 "
        >
       {cart.length?(   cart.map((pd) => (
          <SinglePdct pd={pd}/>
          ))):(<>
            <img src={EmptyCart} alt="" />
          <Link to={'/'}>
            <Button>Go to Home</Button>
          </Link>
            </>
          )}
        </div>
        <div id="right" className="w-[30%] h-[87%] bg-[#343a40] m-3  p-5 ">
          <CartSideBar />
        </div>
      </div>
    </>
  );
};

export default CartPage;
