import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import ButtonTag from "../Components/ButtonTag";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../Components/ProductContext";

const CartListPage = () => {
  const navigate = useNavigate();
  const { cartItems, setCount,subTotal, setSubTotal, setCartItems } = useContext(ProductContext)
  const handleDeleteCart = () => {
    setCartItems([]);
    setCount(0);
    setSubTotal(0);
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <Card>
            <CardBody className="d-flex flex-row justify-content-center align-items-center gap-3">
              <img
                src={cartItems?.length > 0 && cartItems[0]?.images[0]}
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
                <div>
                <Link
                  to={"/results"}
                  className="text-decoration-none  link-hover card-link"
                  onClick={handleDeleteCart}
                >
                  Delete
                </Link>
                <span>{' '} | {' '}</span>
                <Link
                  to={"/results"}
                  className="text-decoration-none  link-hover card-link"
                >
                  Add items
                </Link>
                </div>
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
                      onClick={()=>navigate('/checkout')}
                    />
                    <ButtonTag
                      label={"Go to cart"}
                      className={"bg-success border-0 rounded-pill w-100"}
                      onClick={()=>navigate('/addToCart')}
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