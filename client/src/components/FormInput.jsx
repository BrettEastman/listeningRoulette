import React from 'react';
import styled from 'styled-components';

const FormInput = ({ labelText, name, type, placeholder, onChange, value }) => {
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

const Label = styled.label`
  margin-bottom: 2px;
  display: block;
`;

const Input = styled.input`
  display: block;
  font-family: inherit;
  width: 100%;
  padding: 4px;
`;

export default FormInput;
