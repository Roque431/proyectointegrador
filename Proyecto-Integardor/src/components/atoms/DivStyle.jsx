import styled from "styled-components";

export const DivStyle = styled.div`
    position: ${props => (props.position ? props.position : 'absolute')};
    width: ${props => (props.width ? props.width : '15%')};
    height: ${props => (props.height ? props.height : "auto")};
    display: ${props => (props.display ? props.display : 'flex')};
    justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
    top: ${props => (props.top ? props.top : '8px')};
    left: ${props => (props.left ? props.left : '80%')};
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : "transparent")};
`