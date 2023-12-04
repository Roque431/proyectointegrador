import React from 'react'
import { Contenedor } from '../atoms/Contenedor'
import { ImgAndPic } from '../atoms/ImgAndPic'
import "./Redes.css"
import { DivStyle } from '../atoms/DivStyle'

function Redes() {
  return (
    <Contenedor >
      <DivStyle>
        <ImgAndPic src="whatsapp.png" alt="whatsapp" className="PicturesRed" />
        <ImgAndPic src="email.png" alt="email" className="PicturesRed" />
        <ImgAndPic src="facebook.png" alt="Facebook" className="PicturesRed" />
        <ImgAndPic src="instagram.png" alt="instagram" className="PicturesRed" />
      </DivStyle>
    </Contenedor>
  )
}

export default Redes