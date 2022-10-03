import React from 'react'
import './about.css'
const About = () => {
  return (
    <div>
        <h1 className='sobre-nosotros-titulo'>proximamente</h1>
        <p className='sobre-nosotros-parrafo'>Vamos a estar inaugurando nuestro club!</p>
        <div className='container sobre-nosotros-contenedor-cards'>
          <div className='col-md-4 sobre-nosotros-card'>
            <img src='../../../assets/img-home/canchas.jpg' alt='Canchas de padel' className='img-fluid mb-3 rounded pb-4'/>
            <h4>6 Canchas de padel de sintético y blindex</h4>
          </div>
          <div className='col-md-4 sobre-nosotros-card'>
            <img src='../../../assets/img-home/clases.jpg' alt='Clases de padel' className='img-fluid mb-3 rounded pb-4'/>
            <h4>Vas a poder tomar clases con los mejores profes</h4>
          </div>
          <div className='col-md-4 sobre-nosotros-card'>
            <img src='../../../assets/img-home/asador.jpg' alt='Quincho' className='img-fluid mb-3 rounded pb-4'/>
            <h4>Quincho con asador para disfrutar del tercer tiempo con amigos</h4>
          </div>
        </div>
    </div>
  )
}

export default About