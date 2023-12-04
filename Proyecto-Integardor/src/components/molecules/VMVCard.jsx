import React from 'react'
import './vmvCard.css'
import VMV from '../../db/VMV'
import { Contenedor } from '../atoms/Contenedor'
import { DivEs } from '../atoms/DivEs'
import { Titulos } from '../atoms/Titulos'
import { Parrafos } from '../atoms/Parrafos'
import { DivStyle } from '../atoms/DivStyle'


function VMVCard() {
    const datosFilt = VMV.slice(0);
  return (
    <Contenedor id='ContCards'>
        <DivStyle id='EstruCards'>
           {datosFilt.map((VMV, index) => (
            <DivEs key={index} id='cards'>
                <Titulos>{VMV.titulo}</Titulos>
                <Parrafos>{VMV.descripcion}</Parrafos>
            </DivEs>
        ))} 
        </DivStyle>
    </Contenedor>
  )
}

export default VMVCard