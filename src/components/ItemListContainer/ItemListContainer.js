import React from 'react'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import { NavLink } from 'react-router-dom'

const ItemListContainer = () => {
  return (
    <>
      <h2 className='mt-3 titulo-productos'>Nuestros productos</h2>
      <div>
        <ul className='categoria-productos'>
          <NavLink to='/categoria/paletas' className='link-categorias'>
            <li>Paletas</li>
          </NavLink>
          <NavLink to='/categoria/ropa' className='link-categorias'>
            <li>Indumentaria</li>
          </NavLink>
          <NavLink to='/categoria/accesorios' className='link-categorias'>
            <li>Accesorios</li>
          </NavLink>
        </ul>
      </div>
      <div className='container'>
          <ItemList />
    </div>
    </>

  )
}

export default ItemListContainer