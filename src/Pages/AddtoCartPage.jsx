import React, { useContext, useEffect } from "react";
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ButtonTag from "../Components/ButtonTag";
import SelectTag from "../Components/SelectTag";
import ProductContext from "../Components/ProductContext";
import Cart from "../Assets/kettle-desaturated._CB424694257_.svg";

const AddtoCartPage = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems, count, setCount,subtotal, setSubtotal, subTotal } = useContext(ProductContext);

  const calculateSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubtotal(total);
  };

  useEffect(() => {
    calculateSubtotal();
    // eslint-disable-next-line
  }, [cartItems]);

  const handleDeleteAddtoCart = (index) => {
    const itemToRemove = cartItems[index];
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    setCount(count - itemToRemove.quantity);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    const itemToUpdate = updatedCartItems[index];
    const quantityDifference = newQuantity - itemToUpdate?.quantity;

    itemToUpdate.quantity = newQuantity;
    updatedCartItems[index] = itemToUpdate;

    setCartItems(updatedCartItems);
    setCount(count + quantityDifference);
    calculateSubtotal();
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <Row>
          <Col lg={9}>
            <Card className="my-4 mx-3">
              <CardHeader>
                <CardTitle>Shopping Cart</CardTitle>
                <sup className="float-end">Price</sup>
              </CardHeader>
              <CardBody>
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <Row className="mb-3">
                      <Col lg={4}>
                        <img
                          src={item.images[0]}
                          alt="img1"
                          style={{ width: "300px", height: "250px" }}
                        />
                      </Col>
                      <Col col={6}>
                        <h4>{item.title}</h4>
                        <small>{item.description}</small>
                        <p>
                          Category :{" "}
                          <Link className="text-decoration-none card-link link-hover">
                            {item.category.name}
                          </Link>
                        </p>
                        <div className="d-flex flex-row align-items-center gap-2">
                          <SelectTag
                            title={item.quantity}
                            option={[1, 2, 3, 4, 5]}
                            className={"quantity"}
                            onChange={(event) => handleQuantityChange(index, parseInt(event.target.value))}
                          />
                          <span> | </span>
                          <Link
                            className="text-decoration-none  link-hover card-link"
                            onClick={() => handleDeleteAddtoCart(index)}
                          >
                            Delete
                          </Link>
                          <span> | </span>
                          <Link
                            to={"/results"}
                            className="text-decoration-none  link-hover card-link"
                          >
                            Add items
                          </Link>
                        </div>
                      </Col>
                      <Col lg={2}>
                        <p className="float-end fw-bold">₹{item.price}</p>
                      </Col>
                    </Row>
                  </div>
                ))}
              </CardBody>
              <CardFooter>
                <h4 className="float-end">
                  Subtotal : <span className="fw-bold">₹{subtotal}</span>
                </h4>
              </CardFooter>
            </Card>
          </Col>
          <Col lg={3} className="mt-4">
            <Card>
              <CardBody>
                <h4 className="float-start">
                  Subtotal : <span className="fw-bold">₹{subtotal}</span>
                </h4>
                <ButtonTag
                  label={"Proceed to Buy"}
                  className={"w-100 rounded-pill bg-warning border-0"}
                  onClick={()=>navigate('/checkout')}
                />
                <h5 className="mt-3">EMI Option</h5>
                <SelectTag
                  title={"EMI option"}
                  className={"w-100"}
                  option={["3 months", "6 months", "9 months", "12 months"]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row className="m-0">
          <Col lg={9}>
            <Card className="d-flex flex-row my-4 mx-3">
            <CardImg
                src={Cart}
                alt="empty cart"
                style={{ width: "300px", height: "250px" }}
                className="mx-3"
              />
              <CardBody className="mt-5">
                <div className="d-flex flex-column align-items-start">
                  <h2>Your Cart is empty</h2>
                  <Link className="text-decoration-none card-link link-hover">
                    Shop today’s deals
                  </Link>
                  <ButtonTag
                    label={"Shop Now"}
                    variant={"outline-info"}
                    className={"text-dark mt-2"}
                    onClick={() => {navigate('/results', { state: { subtotal: subTotal } })}}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default AddtoCartPage;
