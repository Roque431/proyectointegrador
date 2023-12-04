import React from 'react'
import { Contenedor } from '../atoms/Contenedor'
import { InputsSty } from '../atoms/InputsSty';
import { DivCont } from '../atoms/DivCont';
import { CgSearch } from "react-icons/cg";

function BuscadorCitas() {
  return (
    <>
      <Contenedor width="80%" left="20%" height="66px" backgroundColor="rgba(245, 246, 250, 1)" border="1px solid black">
        {/* <DivCont backgroundColor="transparent" width="33%" height="35px" top="13px" left="5%">
          <InputsSty type='text' />
          <Contenedor width="12%" height="35px" left="88%" border="1px solid black" backgroundColor="rgba(255, 255, 255, 1)">
          <CgSearch size={30} />
          </Contenedor>
        </DivCont> */}
      </Contenedor>
    </>
  )
}

export default BuscadorCitas;