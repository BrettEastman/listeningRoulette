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
        <input type="submit" value="Register"></input>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  font-family: 'Recursive', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 8px;
`;

export default Form;
