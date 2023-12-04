import React from 'react'
import { Contenedor } from '../atoms/Contenedor'
import { DivStyle } from '../atoms/DivStyle'
import { ImgAndPic } from '../atoms/ImgAndPic'

function NavContCi() {
  return (
    <>
    <Contenedor top="80px" height="100px" backgroundColor="white">
        <DivStyle left="10%">
          <ImgAndPic src="Logo.jpeg" width="130px"/>
        </DivStyle>
    </Contenedor>
    </>
  )
}

export default NavContCi