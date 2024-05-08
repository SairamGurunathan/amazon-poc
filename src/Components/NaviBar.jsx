import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import NavMenus from "./NavMenus";
import InputBox from "./InputBox";
import Logo from "../Assets/PngItem_12080.png";
import NavIcons from "./NavIcons";
import ModalPopup from "./Modal";

const NaviBar = () => {
  const [show, setShow] = useState(false);
  const handleLocation = () => {
    setShow(true);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-dark gap-3 sticky-top">
        <Navbar.Brand href="#home" className="menu">
          <img
            alt="logo"
            src={Logo}
            width="120"
            height="30"
            className="d-inline-block align-top ps-3"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavMenus
          icon={<Icon icon="ion:location-outline" />}
          line1={"Delivering to Chennai 600001"}
          line2={"Update location"}
          onClick={handleLocation}
        />
        <InputGroup>
          <DropdownButton
            as={InputGroup.Prepend}
            title="All"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Option 1</Dropdown.Item>
            <Dropdown.Item href="#">Option 2</Dropdown.Item>
            <Dropdown.Item href="#">Option 3</Dropdown.Item>
          </DropdownButton>
          <InputBox placeholder={"Search Amazon.in"} />
          <Button
            variant="outline-secondary"
            style={{ backgroundColor: "#febd69", border: "none" }}
          >
            <Icon icon="ic:sharp-search" className="fs-3" />
          </Button>
        </InputGroup>
        <NavIcons
          icon={<Icon icon="twemoji:flag-india" className="fs-5" />}
          title={"EN"}
        />
        <NavMenus line1={"Hello,sign in"} line2={"Accounts & Lists"} />
        <NavMenus line1={"Returns"} line2={"& Orders"} />
        <div className="pe-3">
          <NavIcons
            icon={<Icon icon="bx:cart" className="fs-3" />}
            title={"Cart"}
          />
        </div>
      </Navbar>
      <ModalPopup
        show={show}
        setShow={setShow}
        title={"Choose your location"}
        body={
          "Select a delivery location to see product availability and delivery options"
        }
      />
    </>
  );
};

export default NaviBar;
