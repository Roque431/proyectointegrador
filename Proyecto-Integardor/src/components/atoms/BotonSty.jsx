import styled from "styled-components";

export const BotonSty = styled.button`
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'rgba(194, 73, 20, 1)')};
    width: ${props => (props.width ? props.width : '170px')};
    height: ${props => (props.height ? props.height : '40px')};
    border: none;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0px;
    margin-right: 20px;
    &:hover{
        background-color: rgba(153, 159, 164, 1);
    }
`