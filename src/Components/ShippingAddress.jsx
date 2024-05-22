import React from "react";
import ButtonTag from "./ButtonTag";
import { Card, CardBody, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useContext } from "react";
import ProductContext from "./ProductContext";
import { useNavigate } from "react-router-dom";

const ShippingAddress = ({ nextStep, setAddress, address }) => {
  const { subtotal, subTotal } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="card">
      <Row className="m-0 p-3">
        <Col lg={8}>
          <Card className="border">
            <CardBody>
              <h4 className="mb-3">1. Shipping Address</h4>
              <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={address.address}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingNumber" label="Number" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your number"
                  name="mobile"
                  value={address.mobile}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </CardBody>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="border p-3">
            <CardBody>
              <div className="d-flex flex-column">
                <h4 className="float-start">
                  Subtotal : <span className="fw-bold">₹{subtotal || subTotal}</span>
                </h4>
                <small className="fs-12">Choose a shipping address and payment method to calculate shipping, handling, and tax.</small>
              </div>
              <hr />
              <div>
                <h3>Order Summary</h3>
                <div className="d-flex flex-row justify-content-between">
                  <p>Item</p>
                  <span>...</span>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p>Tax</p>
                  <span>...</span>
                </div>
              </div>
              <hr />
              <div className="d-flex flex-column gap-2">
                <ButtonTag
                  label={"Use this address"}
                  onClick={handleNext}
                  className={"w-100 rounded-pill bg-warning border-0"}
                />
                <ButtonTag
                  label={"Back to Cart"}
                  onClick={() => navigate('/addToCart')}
                  className={"w-100 rounded-pill bg-success border-0"}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ShippingAddress;
