import { Icon } from "@iconify/react";
import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import ButtonTag from "../Components/ButtonTag";
import { Link, useNavigate } from "react-router-dom";

const CartListPage = ({ cartItems, setCount,subTotal, setSubTotal, setCartItems }) => {
  const navigate = useNavigate();
console.log(subTotal);
  const handleDeleteCart = () => {
    setCartItems([]);
    setCount(0);
    setSubTotal(0);
  };

  const handleBuynow = () => {
    const amountInPaise = subTotal * 100;
    var options = {
      key: "rzp_test_GvotXwaXCqSxvf",
      key_secret: "G3T9c7c9XRtpeygGDZnD0lsu",
      amount: amountInPaise,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "for testing purpose",
      handler: function(response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "sairam",
        email: "sairam.gurunathan@gmail.com",
        contact: "9688238114"
      },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <Card>
            <CardBody className="d-flex flex-row justify-content-center align-items-center gap-3">
              <img
                src={cartItems[0]?.images[0]}
                alt="cart"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="d-flex flex-column">
                <h3 className="d-flex flex-row align-items-center text-nowrap">
                  <Icon
                    icon="lets-icons:check-fill"
                    style={{ color: "#087e63" }}
                  />
                  Added to Cart
                </h3>
                <Link
                  to={"/results"}
                  className="text-decoration-none  link-hover card-link"
                  onClick={handleDeleteCart}
                >
                  Delete
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="h-100">
            <Row className="m-0">
              <Col className="d-flex justify-content-center align-items-center ">
                <p className="p-4 text-secondary">
                  Part of your order qualifies for{" "}
                  <span className="fw-bold text-secondary">FREE Delivery</span>.
                  Select this option at checkout.{" "}
                  <Link className="text-decoration-none link-hover card-link">
                    Details
                  </Link>
                </p>
              </Col>
              <Col>
                <CardBody className="d-flex flex-column justify-content-center align-items-center">
                  <h3>Cart subtotal: {subTotal}</h3>
                  <div className="d-flex flex-column align-items-center gap-2 w-100">
                    <ButtonTag
                      label={"Proceed to Buy"}
                      className={
                        "bg-warning border-0 rounded-pill w-100 text-nowrap"
                      }
                      onClick={handleBuynow}
                    />
                    <ButtonTag
                      label={"Back"}
                      className={"bg-success border-0 rounded-pill w-100"}
                      onClick={() => navigate("/product")}
                    />
                  </div>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartListPage;