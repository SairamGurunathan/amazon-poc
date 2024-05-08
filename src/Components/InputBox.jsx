import React from "react";
import { FormControl } from "react-bootstrap";

const InputBox = ({ placeholder, className }) => {
  return (
    <>
      <FormControl placeholder={placeholder} className={className} />
    </>
  );
};

export default InputBox;
