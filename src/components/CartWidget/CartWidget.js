import React from 'react'
import {BsCart} from 'react-icons/bs'
import './cartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className='contenedor-icono'>
        <Link to='/carrito' className='carrito'>
          <BsCart className='icono-carrito' />
        </Link>
        <div className='cantidad-elementos'>0</div>
    </div>
  )
}

export default CartWidget