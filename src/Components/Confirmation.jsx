import React from 'react';
import { useEffect } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ paymentResponse, address }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/results')
    },5000)
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [navigate])
  
  return (
    <div className='card'>
      <Row className='m-0'>
        <h2>Order Confirmation</h2>
        <Col >
        <Card>
          <CardBody>
      <p className='fw-bold'>Order has been successfully placed!</p>
      <p>Payment ID: <span className='fw-bold text-success'>{paymentResponse}</span></p>
      
      <p>Your order will be shipped and delivered within two days.</p>
      </CardBody>
      </Card>
        </Col>
        <Col>
        <h5>Shipping Address: </h5>
      <p>
        <span >{address?.name}</span></p>
        <p>
      <span>{address?.address}</span>
      </p>
      <p>{address?.mobile}</p>
        </Col>
      </Row>
      
    </div>
  );
};

export default Confirmation;
