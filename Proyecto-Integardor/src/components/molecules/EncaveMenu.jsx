import React from 'react'
import { useNavigate  } from 'react-router-dom';
import { Contenedor } from '../atoms/Contenedor'
import { Titulos } from '../atoms/Titulos'
import { DivStyle } from '../atoms/DivStyle'
import { ImgAndPic } from '../atoms/ImgAndPic'
import { TfiAngleDown } from "react-icons/tfi";
import { UlSty } from '../atoms/UlLis';
import { LySty } from '../atoms/liSty';

function EncaveMenu() {
  const navigate  = useNavigate ();

  const handleProductosClick = () => {
    // Redirigir a la ruta deseada
    navigate('/AdmProduc');
  };

  const handleCitasClick = () => {
    // Redirigir a la ruta deseada
    navigate('/AdmCitas');
  };

  const handleButtonClick = () => {
    // Redirigir a la ruta deseada
    navigate('/');
  }; 
  return (
    <>
        <Contenedor backgroundColor="rgba(55, 149, 189, 1)" height="80px">
            <DivStyle left="8%" top="0">
            <UlSty>
            <LySty onClick={handleProductosClick}>Reserva</LySty>
            <LySty onClick={handleCitasClick}>Citas</LySty>
            <LySty onClick={handleButtonClick}>Home</LySty>
            </UlSty>
            </DivStyle>
            {/* <DivStyle width="25%" left="65%" top="7px">
                <ImgAndPic src="Perfil.png" alt="perfil" width="60px" height="60px"/>
                <Titulos fontSize="1.5rem">Nombre Perfil</Titulos>
                <DivStyle left="90%" top="22px">
                <TfiAngleDown size={25}/>
                </DivStyle>
            </DivStyle> */}
        </Contenedor>
    </>
  )
}

export default EncaveMenu