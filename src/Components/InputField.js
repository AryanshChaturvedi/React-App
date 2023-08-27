import React, { useState } from 'react';
import styled from 'styled-components'

const Input = styled.input`
  font-size: 1.8rem
  color: #BF4F74;
  background-color: white;
  margin-left:100px;
 
`
const Label = styled.label`
  margin-bottom: 1rem;
`

const InputField = ({ className, label, type, name, value, onChange }) => {
    return (
        <div>
            <Label htmlFor={name}>{label}:</Label>
            <Input
                type={type}
                id={name}
                name={name}
                value={value}
                style={{ padding:"9px", margin:"20px" }}
                onChange={onChange}
    
            />
        </div>
    );
};

export default InputField;