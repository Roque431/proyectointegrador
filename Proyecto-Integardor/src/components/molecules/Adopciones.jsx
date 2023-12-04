import React from 'react'
import './adopciones.css'
import Adopcion from '../../db/adopcion'
import { Contenedor } from '../atoms/Contenedor'
import { Titulos } from '../atoms/Titulos'
import { DivStyle } from '../atoms/DivStyle'
import { DivEs } from '../atoms/DivEs'
import { ImgAndPic } from '../atoms/ImgAndPic'
import { Parrafos } from '../atoms/Parrafos'
import { Link } from 'react-router-dom';

function Adopciones() {

    const datosFilt = Adopcion.slice(1);

  return (
    <Contenedor id='ContAdop'>
        <DivStyle id='estrucAdop'>
            <Titulos id='tutam'>{Adopcion[0].titulo}</Titulos>
            <DivEs id='contCad'>
                {datosFilt.map((Adopcion, index) => 
                <DivEs key={index} id='cardsAdop'>
                    <ImgAndPic src='license.png' id='imgAdop'/>
                    <Titulos>{Adopcion.nombre}</Titulos>
                    <Parrafos>{Adopcion.descripcion}</Parrafos>
                </DivEs>
                )}
            </DivEs>
            {/* <Link>a</Link> */}
            <Titulos>ver mas →</Titulos>
        </DivStyle>
    </Contenedor>
  )
}

export default Adopciones