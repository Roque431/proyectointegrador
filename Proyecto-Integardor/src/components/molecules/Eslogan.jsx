import React from 'react'
import './eslogan.css'
import { DivEs } from '../atoms/DivEs'
import { Contenedor } from '../atoms/Contenedor'
import Info from '../../db/Info'
import { Titulos } from '../atoms/Titulos'
import { Parrafos } from '../atoms/Parrafos'

function Eslogan() {
  return (
    <Contenedor height="280px" backgroundColor="rgba(249, 224, 174, 1) " top="480px">
           <DivEs id='EslogEstru'>
            <Titulos>{Info[1].titulo}</Titulos><br/>
            <Parrafos>{Info[1].descripcion}</Parrafos>
           </DivEs>
    </Contenedor>
  )
}

export default Eslogan