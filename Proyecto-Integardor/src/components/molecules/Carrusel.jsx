import React from 'react'
import './carrusel.css'
import { Contenedor } from '../atoms/Contenedor'
import Carousel from 'react-bootstrap/Carousel';
import { ImgAndPic } from '../atoms/ImgAndPic'
import 'bootstrap/dist/css/bootstrap.min.css';


function Carrusel() {
  return (
      <Contenedor id='topCarru'>
      <Carousel>
      <Carousel.Item>
        <ImgAndPic src='shapes.png' id='CarrImg'/>
      </Carousel.Item>
      <Carousel.Item>
      <ImgAndPic src='shapes.png' id='CarrImg' />
      </Carousel.Item>
      <Carousel.Item>
      <ImgAndPic src='shapes.png' id='CarrImg' />
      </Carousel.Item>
    </Carousel>
    </Contenedor>
  )
}

export default Carrusel




      
