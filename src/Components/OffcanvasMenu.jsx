import React from "react";
import { Offcanvas } from "react-bootstrap";

const OffcanvasMenu = ({ show, menuList, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          style={{ backgroundColor: "#232f3e" }}
          className="text-white"
        >
          <Offcanvas.Title className="ps-2">Hello, sign in</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {menuList?.map((option, index) => (
            <ul key={index} className="footer-list p-0">
              <h5 className="my-4 ps-4">{option?.heading}</h5>
              <li className="d-flex flex-column gap-4 ps-4 ">
                {option?.menu?.map((li, i) => (
                  <li key={i} className="canvas-hover">
                    {li}
                  </li>
                ))}
              </li>
              <hr className="w-100" />
            </ul>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasMenu;
