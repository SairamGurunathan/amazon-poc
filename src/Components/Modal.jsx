import React from "react";
import Modal from "react-bootstrap/Modal";
import ButtonTag from "./ButtonTag";
import InputBox from "./InputBox";

const ModalPopup = ({ show, setShow, title, body }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal show={show} animation={false} centered onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "#f0f2f2" }}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted fs-6">{body}</p>
          <ButtonTag
            label={"Sign in to see your addresses"}
            className={"w-100 bg-warning border-0 text-dark"}
          />
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-center gap-2">
            <InputBox className={"w-100 border-dark"} />
            <ButtonTag
              label={"Apply"}
              variant={"outline-light"}
              className={"text-dark"}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPopup;
