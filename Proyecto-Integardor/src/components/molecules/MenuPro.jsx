import React from 'react';
import './menuPro.css'
import { Link } from 'react-router-dom';
import { Contenedor } from '../atoms/Contenedor';
import { DivStyle } from '../atoms/DivStyle';
import { Titulos } from '../atoms/Titulos';
import { DivEs } from '../atoms/DivEs';

function MenuPro({ onToggle }) {
  return (
    <Contenedor width="20%" height="440px" backgroundColor="white">
        <DivEs border="1px solid black" height="65px" backgroundColor="rgba(245, 246, 250, 1)">
          <DivStyle left="0" width="100%" >
            <Titulos>Reserva</Titulos>
          </DivStyle>
          <DivEs top="80px" textAlign="justify">
            
            <nav className='navmenu'>
        <ul className='ulmenu'>
          <li className='lipro'>
            <Link to="/AdmProduc" onClick={onToggle}>
              Medicamentos
            </Link>
          </li>
          <li className='li2pro'>
            <Link to="/AdmProduc" onClick={onToggle}>
              Productos
            </Link>
          </li>
        </ul>
      </nav>
          </DivEs>
        </DivEs>
      </Contenedor> 
  );
}

export default MenuPro;
