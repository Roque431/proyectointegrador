import styled from "styled-components";

export const DivCont = styled.div`
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : "transparent")};
    position: ${props => (props.position ? props.position : 'absolute')};
    width: ${props => (props.width ? props.width : '15%')};
    left: ${props => (props.left ? props.left : "10%")};
    justify-content: ${props => (props.justifyContent ? props.justifyContent : "space-between")};
    display: ${props => (props.display ? props.display : 'Flex')};
    align-items: ${props => (props.alignItems ? props.alignItems : 'none')};
    top: ${props => (props.top ? props.top : "0")};
    height: ${props => (props.height ? props.height : "auto")};
    text-align: ${props => (props.textAlign ? props.textAlign : "none")};
    border: ${props => (props.border ? props.border : 'none')};
`