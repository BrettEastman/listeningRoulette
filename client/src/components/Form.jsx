import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const initialFormInput = {
  name: '',
  album: '',
};

const Form = function CreateForm ({ handleSubmit }) {
  const [ formInput, setFormInput ] = useState(initialFormInput);

  const clearForm = () => {
    setFormInput(initialFormInput);
  };

  const handleInputChange = () => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(formInput);
        clearForm();
      }}
    >
      <h3>Enter your pick!</h3>
      <div>
        <FormInput
          labelText="Name"
          type="text"
          name="name"
          value={formInput.name}
          placeholder="Enter name"
          onChange={handleInputChange}
        />
        <FormInput
          labelText="Album"
          type="text"
          name="album"
          value={formInput.album}
          placeholder="Enter album"
          onChange={handleInputChange}
        />
        <Input type="submit" value="Register"></Input>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  font-size: .8rem;
  padding: .2rem;
  margin: .2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: hsl(358deg 99% 64% /.3);
  row-gap: 8px;
`;

const Input = styled.input`
  color: black;
  border: none;
  background-color: hsl(358deg 99% 44% /.3);
  border-radius: 8px;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: hsla(204deg 90% 66% / .9);
  }
`

export default Form;
