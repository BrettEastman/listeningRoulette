import React from 'react';

const FormInput = ({ labelText, name, type, placeholder, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
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

export default FormInput;
