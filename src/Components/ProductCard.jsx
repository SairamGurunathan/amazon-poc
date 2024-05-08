import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap"; // Import Row and Col from react-bootstrap
import OfferPrice from "./OfferPrice";

const ProductCard = ({ heading, img, link }) => {
  return (
    <>
      <Card className="prod-card border-0">
        <h5 className="text-start fw-bold">{heading}</h5>
        {Array.isArray(img) ? (
          <Row>
            {img.map((product, index) => (
              <Col key={index} xs={6}>
                <div className="d-flex flex-column">
                  <img
                    src={product?.pro || product}
                    alt="product"
                    className="pro-images my-2"
                  />
                  {product?.offer ? (
                    <OfferPrice offer={product?.offer} price={product?.price}/>
                  ) : (
                    <small className="text-wrap fs-12">{product?.price}</small>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <img src={img} alt="img" className="pro-img my-2" />
        )}
        <Link to="#" className="text-decoration-none">
          <small className="card-link">{link}</small>
        </Link>
      </Card>
    </>
  );
};

export default ProductCard;
