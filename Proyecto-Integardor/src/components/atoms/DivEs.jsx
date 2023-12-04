import styled from "styled-components";

export const DivEs = styled.div`
    position: relative;
    top: ${props => (props.top ? props.top : "0")};
    border: ${props => (props.border ? props.border : "none")};
    height: ${props => (props.height ? props.height : "auto")};
    text-align: ${props => (props.textAlign ? props.textAlign : "center")};
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : "transparent")};
`