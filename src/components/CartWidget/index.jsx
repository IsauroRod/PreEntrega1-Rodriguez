import { IconButton } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./cartWidget.css"
export const CartWidget = () => {
  return (
    <div className='cart-container'>
    <IconButton aria-label="add to shopping cart" color='primary' size='small'>
        <ShoppingCartIcon fontSize='large'/>
    </IconButton>
    <p className='cart-amount'>0</p>
    </div>
  )
}

export default CartWidget