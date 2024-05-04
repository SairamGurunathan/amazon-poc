import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap

const ProductCard = ({ heading, img, link }) => {
  return (
    <>
      <Card className='prod-card'>
        <h5 className='text-start'>{heading}</h5>
        {Array.isArray(img) ? (
          <Row>
            {img.map((product, index) => (
              <Col key={index} xs={6}> 
                <div className='d-flex flex-column'>
                    <img src={product?.pro} alt='product' className='pro-images my-2' />
                    <small className='text-wrap fs-12'>{product?.price}</small>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <img src={img} alt='img' className='pro-img my-2' />
        )}
        <Link to='#' className='text-decoration-none'><small>{link}</small></Link>
      </Card>
    </>
  );
}

export default ProductCard;
