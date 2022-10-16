import React from 'react'
import CartWidget from '../../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './home.css'

const Productos = () => {
  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 contenedor-img-home'>
              <img src='../../../assets/img-home/tienda.jpg' alt='Foto del local' className='img-fluid my-5 rounded shadow'></img>
            </div>
            <div className='col-md-6 my-auto'>
              <h1 className=' home-titulo'>Córdoba Padel</h1>
              <p className='home-parrafo'>Somos una tienda de Padel ubicada en la zona norte de la Ciudad de Córdoba. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante eros, congue vitae eros eu, imperdiet gravida nisl. In euismod ligula nec libero convallis, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante eros </p>
              <Link to='/contact' className='home-link'>
                <div className='home-btn'>Necesito sponsor!</div>
              </Link>
            </div>
          </div>
         
      </div>
      <ItemListContainer />
      <CartWidget />
    </div>
  )
}

export default Productos