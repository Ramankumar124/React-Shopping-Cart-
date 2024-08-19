import React, { useContext, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { CartContext } from "../../Context/Context";
import Rating from "../Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";

const SinglePdct = ({ pd }) => {
  const {
    state: { cart, product },
    dispatch,
  } = useContext(CartContext);
  const [dropinput, setdropinput] = useState(1);
  // useEffect(() => {
  // console.log(cart);
  // }, [dropinput])

  const setQuantity = (n, Id) => {
    setdropinput(n);

    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: Id,
        qty: n,
      },
    });
  };
  return (
    <div className="w-[70%] h-24 border-black border-1 flex rounded-md items-center p-2 gap-4">
      <img
        className="w-[80px] h-[80px] rounded-md object-cover object-center"
        src={pd.image}
        alt=""
      />
      <div className="w-[200px] text-wrap">
        <h1 className="text-xl">{pd.name}</h1>
      </div>
      <p className="font-bold text-xl">${pd.price}</p>
      <Rating rating={pd.ratings} />
      <DropdownButton id="dropdown-item-button" title={dropinput} size="lg">
        <Dropdown.Item onClick={() => setQuantity(1, pd.id)}>1</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity(2, pd.id)}>2</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity(3, pd.id)}>3</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity(4, pd.id)}>4</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity(5, pd.id)}>5</Dropdown.Item>
      </DropdownButton>
      <MdDelete
        className="text-3xl ml-4"
        onClick={() => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: pd,
          });
        }}
      />
    </div>
  );
};

export default SinglePdct;
