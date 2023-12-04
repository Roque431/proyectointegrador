import React from 'react'
import './productos.css'
import { Contenedor } from '../atoms/Contenedor'
import { DivStyle } from '../atoms/DivStyle'
import { DivEs } from '../atoms/DivEs'
import { Titulos } from '../atoms/Titulos'
import { Parrafos } from '../atoms/Parrafos'
import { BotonSty } from '../atoms/BotonSty'
import { ImgAndPic } from '../atoms/ImgAndPic'

function Productos() {
  return (
    <Contenedor id='recip'>
        <DivStyle id='contaiPro'>
            <DivEs id='estruc'>
                <Titulos>Conoce nuestro productos</Titulos>
                <Parrafos>
                    Productos que se encuentran en la sucursal o produstos que se recomiendan comprar en tiendas online haciendo enfacis que son recomendaciones 
                </Parrafos><br />
                <BotonSty>Ver Productos</BotonSty>
            </DivEs>
            <ImgAndPic src='liscense 2.png' alt='productos' id='prodi'/>
        </DivStyle>
    </Contenedor>
  )
}

export default Productos