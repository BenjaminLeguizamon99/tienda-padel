import React from 'react'
import './contact.css'
import { BsEnvelope } from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
        <h1 className='contacto-titulo'>Contacto</h1>
        <p className='contacto-parrafo'>¿Estás buscando sponsor?</p>
        <ul className='container contacto-lista'>
          <li className='contacto-elemento-lista'>Tenes entre 15 y 20 años</li>
          <li className='contacto-elemento-lista'>Te apasiona el padel y te queres dedicar profesionalmente.</li>
          <li className='contacto-elemento-lista'>Vivis y competís en Córdoba.</li>
        </ul>
        <p>Mandanos un mail con tus mejores jugadas y pretenciones y nos contactaremos con vos</p>
        <div>
          <div className='container'>
            <form className='contacto-formulario'>
              <input placeholder='Nombre...' className='contacto-elementos'></input>
              <input placeholder='Apellido...' className='contacto-elementos'></input>
              <input placeholder='Número...' className='contacto-elementos'></input>
              <input placeholder='Mail...' className='contacto-elementos'></input>
              <input type='file' className='contacto-elementos'></input>
              <button className='contacto-btn'>Enviar</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact