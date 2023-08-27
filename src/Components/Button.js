import React from 'react';
import styled from 'styled-components'

const ButtonComponent = styled.button`
  background-color: #0047AB;
  margin: 49px;
  color: #FFFFFF;
  padding:  0.4rem;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '175px'};  &:hover {
    cursor: pointer;
    opacity: 0.9;
    color: #a72525;
    
  }
`

const Button = ({ type, id, value, children,  onClick }) => {
    return (
        <ButtonComponent onClick={onClick}
        type={type ? type: "button"} 
        id={id}
        value = {value}>
            { children } 
        </ButtonComponent>
    );
};

export default Button;