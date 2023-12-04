import React from 'react'
import './sobreDe.css'
import Info from '../../db/Info'
import { Contenedor } from '../atoms/Contenedor'
import { DivStyle } from '../atoms/DivStyle'
import { ImgAndPic } from '../atoms/ImgAndPic'
import { DivEs } from '../atoms/DivEs'
import { Titulos } from '../atoms/Titulos'
import { Parrafos } from '../atoms/Parrafos'

function SobreDe() {
  return (
    <Contenedor id='ContSobre'>
        <DivStyle id='estrucSbre'>
            <DivEs id='bloques'>
            <ImgAndPic src='license.png' alt='img' id='imgSBD'/>
            <DivEs id="conte">
                <Titulos>{Info[3].nombre}</Titulos>
                <Parrafos>{Info[3].informacion}</Parrafos>
            </DivEs>
            </DivEs>
            <DivEs id='bloques'>
            <ImgAndPic src='liscense 2.png' alt='img' id='imgSBD'/> 
            <DivEs id='conte'>
            <Titulos>{Info[3].nombre2}</Titulos>
                <Parrafos>{Info[3].informacion}</Parrafos>
            </DivEs>
            </DivEs>
        </DivStyle>
    </Contenedor>
  )
}

export default SobreDe