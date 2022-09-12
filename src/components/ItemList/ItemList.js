import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Item from '../Item/Item';
import './itemList.css'

//En este archivo hago la llamada a JSONbin y le paso los datos obtenidos a Item.js
const ItemList = () => {
    const[productos, setProductos] = useState([]);
    
    useEffect(()=>{
        axios('https://api.jsonbin.io/v3/b/631ca4dc5c146d63ca966290')
        .then(res=>setProductos(res.data.record))
    }, [])
     
    return (
    <div className='contenedor-cards'>
        {productos.map((product) => (
            <Item key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ItemList
