import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../Context/Context';

const CartSideBar = () => {
  const {
    state: { cart, product },
    dispatch,
  } = useContext(CartContext);
  const total=cart.reduce(function(acc,currVal){
   return acc+(currVal.price*currVal.qty);
  },0)
  return (
    <div className='text-white flex flex-col gap-4'>
        <h1 className='text-4xl'>SubTotal ({cart.length}) Items</h1>
        <p className='text-2xl font-bold'>Total: ${total}</p>
      <Button className='font-semibold text-xl'>Procced To Checkout</Button>
    </div>
  )
}

export default CartSideBar
