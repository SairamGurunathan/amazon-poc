import React from 'react';
import { Form } from 'react-bootstrap';

const SelectTag = ({ title, option, className, onChange }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    onChange(value);
  };

  return (
    <Form.Select className={className} onChange={handleChange} value={title}>
      <option>{title}</option>
      {option?.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectTag;
