import React from 'react'
import './home.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='bg-color'>
      <div>
        <h1>Córdoba Padel</h1>
      </div>
      <div className='pb-4 contenedor-carrusel col-md-12'>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-1.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-2.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-3.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-4.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-5.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-6.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-7.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-8.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src='../../../assets/img-home/padel-9.jpg' className='img-fluid img-carousel' />
        </Carousel.Item>
      </Carousel>
      </div>
      
      <div className='container d-flex flex-column justify-content-center'>
        <p className='parrafo-home my-4'>Somos una tienda de Padel ubicada en la zona norte de la ciudad de Córdoba. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo ut lectus interdum rhoncus. Morbi gravida mi quis facilisis maximus. Nam et commodo diam, et lacinia felis. Vivamus gravida porttitor eros, in condimentum ante mollis id. Mauris porttitor a.</p>
      </div>
    </div>
  )
}

export default Home