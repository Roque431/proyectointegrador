import styled from "styled-components";

export const InputsSty = styled.input`
    background-color: white;
    border: ${props => (props.border ? props.border : '1px solid black')};;
    border-radius: 0px;
    width: ${props => (props.width ? props.width : '88%')};
    font-size: 1.1rem;
`