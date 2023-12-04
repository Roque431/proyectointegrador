// import React from 'react'

// function ImgAndPic (src, alt, className) {
//   return (
//     <>
//     <img src={src} alt={alt} className={`ImgAndPic ${className}`} />
//     </>
//   )
// }

// export default ImgAndPic

import styled from 'styled-components'

export const ImgAndPic = styled.img`
    width:${props => (props.width ? props.width : '30px')};
    height: ${props => (props.height ? props.height : "none")};
    margin-right: 20px;
`