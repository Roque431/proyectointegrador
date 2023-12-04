import React from 'react';
import { useNavigate  } from 'react-router-dom';
import Redes from './Redes';
import { DivStyle } from '../atoms/DivStyle';
import { Contenedor } from '../atoms/Contenedor';
import { UlSty } from '../atoms/UlLis';
import { BotonSty } from '../atoms/BotonSty';
import { ImgAndPic } from '../atoms/ImgAndPic';
import Info from '../../db/Info';
import { LySty } from '../atoms/liSty';

function NavVar() {
  const navigate  = useNavigate ();

  const handleButtonClick = () => {
    // Redirigir a la ruta deseada
    navigate('/Citas');
  };

  const handleCitasClick = () => {
    // Redirigir a la ruta deseada
    navigate('/AdmCitas');
  };

  const handleRegistroClick = () => {
    // Redirigir a la ruta deseada
    navigate('/Registro');
  };

  const handleAccederClick = () => {
    // Redirigir a la ruta deseada
    navigate('/Acceder');
  };

  return (
    <Contenedor height="165px" backgroundColor="white">
      <Redes />
      <DivStyle top="55px" left="0%" width="30%">
        <ImgAndPic src="Logo.jpeg" alt="Logo" className="PicturesRed" width="150px" />
      </DivStyle>
      <DivStyle top="68px" left="55%" width="45%">
        <UlSty>
          {/* <LySty>{Info[0].nav1}</LySty>
          <LySty>{Info[0].nav2}</LySty>
          <LySty>{Info[0].nav3}</LySty> */}
          <LySty onClick={handleCitasClick} >Aplicacion</LySty>
          <BotonSty onClick={handleButtonClick}>{Info[0].nav4}</BotonSty>
          <LySty onClick={handleAccederClick}>Acceder</LySty>
          <LySty onClick={handleRegistroClick}>Registrarse</LySty>

          

          {/* <Link to="/AdmCita">
            <LySty>{Info[0].nav5}</LySty>
          </Link>
          <Link to="/GenerarCita">
            <LySty>{Info[0].nav6}</LySty>
          </Link> */}
        </UlSty>
      </DivStyle>
    </Contenedor>
  );
}

export default NavVar;
