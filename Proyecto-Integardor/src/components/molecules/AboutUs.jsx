import React from 'react'
import './aboutUs.css'
import { Contenedor } from '../atoms/Contenedor'
import { ImgAndPic } from '../atoms/ImgAndPic'
import { DivEs } from '../atoms/DivEs'
import { DivStyle } from '../atoms/DivStyle'
import Info from '../../db/Info'
import { Titulos } from '../atoms/Titulos'
import { Parrafos } from '../atoms/Parrafos'

function AboutUs() {
  return (
    <Contenedor id='ContAbout'>
      <DivEs id='EstrucAbout'>
      <ImgAndPic src='Analyse.png' alt='Analyse' id='Anlys'/>
        <DivStyle id='InfoAbout'>
          <Titulos>{Info[2].titulo}</Titulos><br />
          <Parrafos>{Info[2].descripcion}</Parrafos>
        </DivStyle>
      </DivEs>
    </Contenedor>
  )
}

export default AboutUs