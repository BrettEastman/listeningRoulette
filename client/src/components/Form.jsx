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
        <Input type="submit" value="Submit"></Input>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  font-size: 1rem;
  text-shadow: 0.5px 0.5px hsla(204deg 70% 66% / .9);
  padding: 1rem;
  margin: .5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: radial-gradient(hsl(358deg 99% 84% /.3), hsl(358deg 99% 64% /.3));
  row-gap: 8px;
  box-shadow: 0 2px 4px hsl(358deg 99% 24% /.3);
  transform: scale(1.1);
`;

const Input = styled.input`
  color: black;
  background-color: hsl(358deg 99% 44% /.3);
  border-radius: 8px;
  text-shadow: 0.5px 0.5px hsla(204deg 70% 66% / .9);
  padding: 8px;
  font-weight: 700;
  letter-spacing: 3px;
  border: 0.5px solid black;
  margin-top: 8px;
  cursor: pointer;
  &:hover {
    color: hsla(204deg 90% 66% / .9);
  }
`

export default Form;
