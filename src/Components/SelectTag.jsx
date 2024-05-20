import React from 'react';

const SelectTag = ({ title, option, className, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <select className={className} onChange={handleChange} defaultValue={title}>
      {option.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default SelectTag;
