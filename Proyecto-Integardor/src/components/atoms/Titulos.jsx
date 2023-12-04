import styled from "styled-components";

export const Titulos = styled.h2`
    color: black;
    font-size: ${props => (props.fontSize ? props.fontSize : "28px")};
    margin: ${props => (props.margin ? props.margin : "none")};
`