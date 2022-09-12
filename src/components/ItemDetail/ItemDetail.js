import React, {useState} from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({info}) => {

  const [goToCart, setGoToCart] = useState(false);
  const onAdd = (cantidad) =>{
    setGoToCart(true);
  }
  

  return (
    <div className='row container mx-auto my-4'>
        <div className='col-md-6 my-auto'>
            <img src={info.imagen} alt={info.producto} className='img-fluid' />
        </div>
        <div className='col-md-6 my-auto'>
            <h3 className='text-uppercase'>{info.producto}</h3>
            <p>{info.descripcion}</p>
            <div className='lista-detalle'>
                <p>Marca: {info.marca}</p>
                <p>Modelo: {info.modelo}</p>
                <p className='precio-detalle'>Precio: ${info.precio}</p>
            </div>
            {
              goToCart ? <Link to='/carrito' className='btn-detalle mb-3'>Terminar compra</Link> : <ItemCount initial={1} stock={6} onAdd = {onAdd} />
            }
        </div>
    </div>
  )
}

export default ItemDetail