import React from 'react'
import './sevicios.css'
import Servicios from '../../db/Servicios'
import { Contenedor } from '../atoms/Contenedor'
import { Titulos } from '../atoms/Titulos'
import { DivEs } from '../atoms/DivEs'
import { DivStyle } from '../atoms/DivStyle'
import { ImgAndPic } from '../atoms/ImgAndPic'
import { Parrafos } from '../atoms/Parrafos'

function Sevicios() {
    const datosFilt = Servicios.slice(1);
    return ( 
        <Contenedor id='ComtServ'>
            <DivStyle id='EstrucServ'>
                <Titulos id='mainti'>{Servicios[0].titulo}</Titulos>
                <DivEs id='CardsServ'>
                    {datosFilt.map((Servicios, index) => (
                    <DivEs key={index} id='estyCar'>
                        <ImgAndPic src={Servicios.imagen} alt='imagen' id='tamim'/>
                        <Titulos>{Servicios.servicio}</Titulos>
                        <Parrafos>{Servicios.descripcion}</Parrafos>
                    </DivEs>
                ))}
                </DivEs>
            </DivStyle>
        </Contenedor>
    )
}

export default Sevicios