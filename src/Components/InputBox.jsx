import React from "react";
import { FormControl } from "react-bootstrap";

const InputBox = ({ placeholder, className, onChange, value,type}) => {
  return (
    <>
      <FormControl type={type} placeholder={placeholder} className={className} onChange={onChange} value={value}/>
    </>
  );
};

export default InputBox;
