import styled from "styled-components";

export const BottomSty = styled.button`
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'white')};
    width: ${props => (props.width ? props.width : '90%')};
    height: 28px;
    border: ${props => (props.border ? props.border : '1px solid black')};
    border-radius: ${props => (props.borderRadius ? props.borderRadius : 'none')};
    font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
    margin-right: ${props => (props.marginRight ? props.marginRight : "0px")};

    &:hover{
        background-color: rgba(245, 246, 250, 1);
    }
`