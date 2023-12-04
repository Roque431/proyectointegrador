import React from 'react';
import { useNavigate  } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import Redes from './Redes';
import { DivStyle } from '../atoms/DivStyle';
import { Contenedor } from '../atoms/Contenedor';
import { UlSty } from '../atoms/UlLis';
import { ImgAndPic } from '../atoms/ImgAndPic';
import { LySty } from '../atoms/liSty';

function NavVarCi() {
  const navigate  = useNavigate ();

  const handleButtonClick = () => {
    // Redirigir a la ruta deseada
    navigate('/');
  };
  return (
    <Contenedor height="165px" backgroundColor="white">
    <Redes />
    <DivStyle top="55px" left="0%" width="30%">
      <ImgAndPic src="Logo.jpeg" alt="Logo" className="PicturesRed" width="150px" />
    </DivStyle>
    <DivStyle top="68px" left="50%" width="45%">
      <UlSty>
        <LySty onClick={handleButtonClick}>Home</LySty>
      </UlSty>
    </DivStyle>
  </Contenedor>
  );
}

export default NavVarCi;
