// import React, { Children } from 'react'

// function Contenedor(className, Children) {
//   return (
//     <>
//     <div className={`Contenedor ${className}`} >{Children}</div>
//     </>
//   )
// }

// export default Contenedor

import styled from 'styled-components'

export const Contenedor = styled.div`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'rgba(252, 134, 33, 1)')};
  position: absolute;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : '50px')};
  top: ${props => (props.top ? props.top : '0')};
  right: 0;
  left: ${props => (props.left ? props.left : "0")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "none")};
` 