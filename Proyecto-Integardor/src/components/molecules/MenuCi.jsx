import React from 'react';
import './menuCi.css'

import { Link } from 'react-router-dom';
import { Contenedor } from '../atoms/Contenedor';
import { DivStyle } from '../atoms/DivStyle';
import { Titulos } from '../atoms/Titulos';
import { DivEs } from '../atoms/DivEs';

function MenuCi({ onToggle }) {
  return (
    <Contenedor width="20%" height="440px" backgroundColor="white">
        <DivEs border="1px solid black" height="65px" backgroundColor="rgba(245, 246, 250, 1)">
          <DivStyle left="0" width="100%" >
            <Titulos>Registro de Citas</Titulos>
          </DivStyle>
          <DivEs top="80px" textAlign="justify">
            
            <nav className='navmenu'>
        <ul className='ulmenu'>
          <li className='limenu'>
            <Link to="/AdmCitas" onClick={onToggle}>
              Citas
            </Link>
          </li>
          <li className='li2menu'>
            <Link to="/AdmCitas" onClick={onToggle}>
              Perfiles
            </Link>
          </li>
        </ul>
      </nav>
          </DivEs>
        </DivEs>
      </Contenedor>  
  );
}

export default MenuCi;
