import React from 'react'
import { CartState } from '../context/Context';

const Cart = () => {
  const {state: {cart}} = CartState();
  return (
    <div>Cart</div>
  )
}

export default Cart