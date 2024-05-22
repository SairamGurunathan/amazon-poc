import React from "react";
import { FormControl } from "react-bootstrap";

const InputBox = ({ placeholder, className, onChange, value}) => {
  return (
    <>
      <FormControl placeholder={placeholder} className={className} onChange={onChange} value={value}/>
    </>
  );
};

export default InputBox;
