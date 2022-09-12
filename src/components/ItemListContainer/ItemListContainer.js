import React from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  return (
    <>
      <h2 className='mt-3'>Nuestros productos</h2>
      <div className='container'>
          <ItemList />
    </div>
    </>

  )
}

export default ItemListContainer