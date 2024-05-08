import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownTag = ({ dropTitle, variant }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant={variant} id="dropdown-basic">
        {dropTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownTag;
