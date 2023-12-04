import React from 'react'
import PieDePagina from '../../db/PieDePagina'
import { Contenedor } from '../atoms/Contenedor'
import { Titulos } from '../atoms/Titulos'
import { DivStyle } from '../atoms/DivStyle'
import { Parrafos } from '../atoms/Parrafos'
import { ImgAndPic } from '../atoms/ImgAndPic'

function FooterPag() {
  return (
    <>
    <Contenedor top="3540px" height="250px" backgroundColor="rgba(249, 224, 174, 1)">
    <DivStyle top="15%" left="5%" display="inline-block">
        <Titulos>
          {PieDePagina[0].titulo}
        </Titulos>
        <Titulos>
          {PieDePagina[0].telefonot}
        </Titulos>
        <Parrafos>
          {PieDePagina[0].telefono}
        </Parrafos>
        </DivStyle>
      <DivStyle backgroundColor="transparent" top="20%">
        <ImgAndPic src="whatsapp.png" alt="whatsapp" className="PicturesRed" />
        <ImgAndPic src="email.png" alt="email" className="PicturesRed" />
        <ImgAndPic src="facebook.png" alt="Facebook" className="PicturesRed" />
        <ImgAndPic src="instagram.png" alt="instagram" className="PicturesRed" />
      </DivStyle>
    </Contenedor>
    </>
  )
}

export default FooterPag